import React, { Component } from 'react';
import './css/MySkills.scss';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
import  'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class MySkills extends Component {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('charts'));
        // 绘制图表
        myChart.setOption({
            color: ['#FFEC8B', '#FF6A6A', '#F2F2F2', '#00CD66', '#FF6347'],
            series : [
                {
                  "label": {
                      "normal": {
                          "show": true,
                          "textStyle": {
                              "fontSize": 18
                          }
                      },
                      "emphasis": {
                          "show": true
                      }
                  },
                  name:'掌握技能',
                  type:'pie',
                  radius : [30, 150],
                  center : ['50%', '50%'],
                  roseType : 'area',
                  data:[
                    {value:40, name:'react'},
                    {value:90, name:'html'},
                    {value:70, name:'css'},
                    {value:80, name:'javascript'},
                    {value:90, name:'vue'}
                  ]
                }
            ]
        });
    }
    render() {
        return (
          <div className='skills'>
            <ul className='charts_title'>
                <li>html</li>
                <li>css</li>
                <li>javascript</li>
                <li>vue</li>
                <li>react</li>
            </ul>
            <div id="charts" style={{ width: 600, height: 400 }}></div>
          </div>
        );
    }
}
export default MySkills;