import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import * as echarts from 'echarts';
import { useAuth } from '../Context';
import Takvim from '../Components/Takvim';

function PersonelPerformans() {
  const { isAdmin } = useAuth();

  useEffect(() => {
    // ECharts grafiğini render etmek için
    const chartDom = document.getElementById('main');
    const myChart = echarts.init(chartDom);
    const option = {
      title: {},
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['Ahmet', 'Mehmet Ali', 'Berat', 'Cihan', 'Sefa'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Ahmet',
          type: 'line',
          stack: 'Total',
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: 'Mehmet Ali',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: 'Berat',
          type: 'line',
          stack: 'Total',
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: 'Cihan',
          type: 'line',
          stack: 'Total',
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: 'Sefa',
          type: 'line',
          stack: 'Total',
          data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
      ],
    };
    myChart.setOption(option);

    // Cleanup function to dispose of the chart when the component unmounts
    return () => {
      myChart.dispose();
    };
  }, []);

  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
      <Card style={{ width: '80%', height: '85%', border: 'none', margin: '10vh auto' }}>
        <Card.Body className="d-flex flex-column justify-content-between">
          <div>
            <Card.Title className="text-center mb-4">Personel Performans Grafiği</Card.Title>
            <div id="main" style={{ width: '100%', height: '400px' }}></div>
          </div>
          <div className="mt-4 d-flex justify-content-center">
            <Takvim />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PersonelPerformans;
