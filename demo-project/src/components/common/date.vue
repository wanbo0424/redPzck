<template>
  <div id="calendar">
    <input type="button" v-model="checktime">
    <div class="date" >
        <div class="header">
<<<<<<< HEAD
            <span class="pre-btn" @click="pre" :class="{noPreMonth: nowMonth + 1 == startMonth}"></span>
            <span class="now-y-m">{{nowYear}}年{{nowMonth+1}}月</span>
            <span class="next-btn"  @click="next" :class="{noNextMonth:nowMonth + 1 == endMonth}"></span>
=======
            <span class="pre-btn" @click=" pre"></span>
            <span class="now-y-m">{{nowYear}}年{{nowMonth+1}}月</span>
            <span class="next-btn"  @click=" next"></span>
>>>>>>> ff2ad838cca626b7bdef02678bffca77d0aa8480
        </div>
        <div class="weeks">
            <span>日</span>
            <span>一</span>
            <span>二</span>
            <span>三</span>
            <span>四</span>
            <span>五</span>
            <span>六</span>
        </div>
        <div class="content">
            <ul>
                <li v-for="(dayobject, index) in days" 
<<<<<<< HEAD
                @click="dayobject.flag && showDate(dayobject)" :key="index" 
                :class="{today:today==index, select:selectedMonth == nowMonth && selectedDate == dayobject.day, pre:dayobject == '',chooseable:dayobject.flag}">
                {{dayobject.day}}</li>
=======
                @click="dayobject.flag && showDate(index,dayobject)" :key="index" 
                :class="{today:today==index,select:select==index,pre:dayobject == '',chooseable:dayobject.flag}">{{dayobject.day}}</li>
>>>>>>> ff2ad838cca626b7bdef02678bffca77d0aa8480
            </ul>
        </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Vue from "vue";
export default {
  name: "date",
<<<<<<< HEAD
  props: { 
=======
  props: {
    startMonth:{
      type: Number,
      default: () => {return 5}
    },
    endMonth:{
      type: Number,
      default: () => {return 10}
    },
>>>>>>> ff2ad838cca626b7bdef02678bffca77d0aa8480
    startDate: {
      type: String,
      default: () => {return '2018-08-15'}
    },
    endDate: {
      type: String,
<<<<<<< HEAD
      default: () => {return '2018-10-26'}
=======
      default: () => {return '2018-08-26'}
>>>>>>> ff2ad838cca626b7bdef02678bffca77d0aa8480
    }
  },
  data: function() {
    return {
      days: [],
      nowYear: null,
      nowMonth: null,
      nowDate: null,
      // 选择日期改变样式
      select: null,
      checktime: "",
      startMonth:0,
      endMonth:0,
      selectedDate:new Date().getDate(),
      selectedMonth:new Date().getMonth()
    };
  },
  created() {
    this.$nextTick(() => {
      this.nowdate();
      this.init();
    });
<<<<<<< HEAD
    console.log(this.days)
=======
    console.log(this.istoday)
>>>>>>> ff2ad838cca626b7bdef02678bffca77d0aa8480
  }, 
  computed: {
    today:{
      get:function(){ 
        var date = new Date();
        if (
          this.nowYear === date.getFullYear() &&
          this.nowMonth === date.getMonth()
        ) {
          return  this.getFirstDay(this.nowYear, this.nowMonth) + this.nowDate - 1;
        }
        // return false;
      },  
    }
  },
  
  methods: {
    /**
     * 获取当前年、月、日
     */
    nowdate: function() {
      var date = new Date();
      this.nowYear = date.getFullYear();
      this.nowMonth = date.getMonth();
      this.nowDate = date.getDate();
    },
    /**
     * 获取当月天数
     * @return {number} 
     */
    getDates: function(year, month) {
      var date = new Date(year, month + 1, 0);
      return date.getDate();
    },
    /**
     * 获取当月第一天是星期几
     * @return {number} 
     */
    getFirstDay: function(year, month) {
      var first = new Date(year, month, 1);
      return first.getDay();
    },
    
    /**
     * 初始化当月日期并显示
     */
    init: function() {
      var days = [];
      var firstDay = this.getFirstDay(this.nowYear, this.nowMonth);
      var dates = this.getDates(this.nowYear, this.nowMonth);
      var tolLength = 42;
      // var dayLength = this.days.length;
      this.days.length = 0;
    
      if (firstDay != 0) {
        // 打印上个月的日期在本月列表的显示
        for (var i = 0; i < firstDay; i++) {
          this.days.push('');
        }
      }
      
      for (var i = 0; i < dates; i++) {
        var d = new Date();
        d.setDate(i + 1);
        var fd = d.getDate();
        var dayobject = {flag : false};
        dayobject.day = fd;
        this.days.push(dayobject);

        // 可点击的日期范围
        let st = this.startDate.split('-');
        let et = this.endDate.split('-');
        this.startMonth = Number(st[1]);
        this.endMonth = Number(et[1]);
        let startTime = new Date(st[0],st[1]-1,st[2]).getTime();
        let endTime = new Date(et[0],et[1]-1,et[2]).getTime();
        let currentTime = new Date(this.nowYear, this.nowMonth, dayobject.day).getTime();
      
        if(currentTime > startTime && currentTime < endTime  ){ 
          dayobject.flag = true
        }
      }    
    },
    formatDate: function(year, month, day) {
      var y = year;
      var m = month;
      if (m < 10) m = "0" + m;
      var d = day;
      if (d < 10) d = "0" + d;
      return y + "-" + m + "-" + d;
    },
    /**
     * 显示被点击的日期以及被点击的样式改变
     */
<<<<<<< HEAD
    showDate(dayobject) {
      this.selectedDate = dayobject.day 
      this.selectedMonth = this.nowMonth;
=======
    showDate(index,objectday) {
      this.select = index;
      
>>>>>>> ff2ad838cca626b7bdef02678bffca77d0aa8480
      this.checktime =
        this.nowYear + "-" + (this.nowMonth + 1) + "-" + dayobject.day;  
    },
    /**
     * 上一月显示
     */
    pre: function() {
      if(this.nowMonth + 1 == this.startMonth){
        return false
      }
      if (this.nowMonth <= 0) {
        this.nowYear -= 1;
        this.nowMonth = 11;
      } else {
        this.nowMonth -= 1;
      }
      this.init();
    },
    /**
     * 下一月显示
     */
    next: function() {
      if(this.nowMonth + 1 == this.endMonth){
        return
      }
      if (this.nowMonth == 11) {
        this.nowYear += 1;
        this.nowMonth = 0;
      } else {
        this.nowMonth += 1;
      }
      this.init();
    }
  }
};
</script>
<style lang="scss">
#calender{
  width: 100%;
}
.header{
    display: flex;
    justify-content: space-between;
}
.pre-btn::before{
    content: '';   
    display: inline-block;
    width: 10px;
    height: 10px;
    border: 4px solid red;
    border-bottom: none;
    border-right: none;
<<<<<<< HEAD
    transform: rotate(-45deg);
}
.noPreMonth::before{
    border: 4px solid black;
    border-bottom: none;
    border-right: none;
  }
=======
    transform: rotate(-45deg)
}
>>>>>>> ff2ad838cca626b7bdef02678bffca77d0aa8480
.next-btn::before{
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    border: 4px solid red;
    border-bottom: none;
    border-right: none;
    transform: rotate(135deg)
<<<<<<< HEAD
}
.noNextMonth::before{
  border: 4px solid black;
  border-bottom: none;
  border-right: none;
=======
>>>>>>> ff2ad838cca626b7bdef02678bffca77d0aa8480
}
ul{
  padding: 0px;
  margin: 0px
}
#calendar .content ul li {
  display: block;
  float: left;
  width: 12%;
  font-size: 16px;
  height: 2rem;
  text-align: center;
  line-height: 2rem;
  cursor: pointer;
  color: gray;
  transition: all 0.1s;
  background-color: gainsboro;
  margin: 4px;
  border-radius: 6px;
  border-radius: 50%;
}
#calendar .weeks span {
  font-size: 16px;
  display: inline-block;
  width: 12.5%;
  text-align: center;
  line-height: 30px;
}
#calendar .content ul li.today {
  background: rgba(25, 151, 254, 0.4);
  color: #fff;
}
#calendar .content ul li.select {
  background: rgba(25, 151, 254, 0.4);
  color: #fff;
}
#calendar .content ul li.pre {
  background-color: #fff
}
#calendar .content ul li.chooseable{
    color:black
  }
<<<<<<< HEAD
  
=======
>>>>>>> ff2ad838cca626b7bdef02678bffca77d0aa8480
</style>
