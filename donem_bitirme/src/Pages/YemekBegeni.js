import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import Takvim from '../Components/Takvim';
import '../Components/Takvim.css';
import { Container, Row, Col } from 'react-bootstrap';

function YemekBegeni() {
  useEffect(() => {
    const chartDom = document.getElementById('main');
    const myChart = echarts.init(chartDom);

    const option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [
        {
          name: 'Yemek Beğeni Durumu',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 16,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 400, name: 'Kararsız', itemStyle: { color: '#FFD700' } }, // Sarı
            { value: 700, name: 'Beğendi', itemStyle: { color: '#32CD32' } }, // Yeşil
            { value: 300, name: 'Beğenmedi', itemStyle: { color: '#FF4500' } }, // Kırmızı
          ],
        },
      ],
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        <Col className="text-center">
          <h2>Yemek Beğeni Durumu</h2>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <div
            id="main"
            style={{
              width: '100%',
              maxWidth: '600px',
              height: '400px',
              margin: '0 auto',
              border: '1px solid #ddd',
              borderRadius: '10px',
            }}
          ></div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="d-flex justify-content-center">
          <Takvim />
        </Col>
      </Row>
    </Container>
  );
}

export default YemekBegeni;
