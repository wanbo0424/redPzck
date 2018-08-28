<template>
  <div id="calendar">
    <input type="button" v-model="checktime">
    <div class="date" >
        <div class="header">
            <span class="pre-btn" @click="pre">《</span>
            <span class="now-y-m">{{nowYear}}年{{nowMonth+1}}月</span>
            <span class="next-btn"  @click="next">》</span>
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
                @click="dayobject.flag && showDate(index,dayobject)" :key="index" 
                :class="{today:today==index,select:select==index,pre:dayobject == ''}">{{dayobject.day}}</li>
            </ul>
        </div>
    </div>
    
  </div>
</template>
var 
<script type="text/ecmascript-6">
import Vue from "vue";
export default {
  name: "date",
  props: {
    startDate: {
      type: String,
      default: () => {return '2018-08-15'}
    },
    endDate: {
      type: String,
      default: () => {return '2018-09-09'}
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
    };
  },
  created() {
    this.$nextTick(() => {
      this.nowdate();
      this.init();
    });
    console.log(this.days)
  },
  computed: {
    today: function() {
      var date = new Date();
      if (
        this.nowYear === date.getFullYear() &&
        this.nowMonth === date.getMonth()
      ) {
        return this.getFirstDay(this.nowYear, this.nowMonth) + this.nowDate - 1;
      }
      return false;
    },
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
     * 显示被点击的日期
     */
    showDate(index,objectday) {
      this.select = index;
      this.checktime =
        this.nowYear + "-" + (this.nowMonth + 1) + "-" + objectday.day;
        
    },
    /**
     * 上一月显示
     */
    pre: function() {
      if (this.nowMonth <= 0) {
        this.nowYear -= 1;
        this.nowMonth = 11;
      } else {
        this.nowMonth -= 1;
      }
      this.init();
    },
    /**
     * 上一月显示
     */
    next: function() {
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
    text-align: center;
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
  color: gainsboro;
  transition: all 0.1s;
  background-color: gray;
  margin: 4px;
  border-radius: 6px;
  .activity{
    color: black;
  }
  .pre{
    background-color: #fff
  }
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

</style>
