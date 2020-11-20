import React from 'react';
import { LineChart, PieChart, ColumnChart, AreaChart, GeoChart, BarChart } from 'react-chartkick';
import 'chart.js';
import Cards from '../CardProp/CardProp';
//import Charts from '../Chart/Chart';
import { Container } from '../../globalStyles';
import { Row, Col } from 'react-bootstrap';
<script src="https://www.gstatic.com/charts/loader.js"></script>

const DashboardPage = () => {
//Data to be inserted in the graph
    var data = [
        {"name":"Ratings", "data": {"2017-01-01": 3, "2017-01-02": 4,"2017-01-03": 3, "2017-01-04": 4}},
        {"name":"Customers", "data": {"2017-01-01": 56, "2017-01-02": 23, "2017-01-03": 3, "2017-01-04": 4}},
        {"name":"Sales", "data": {"2017-01-01": 34, "2017-01-02": 47, "2017-01-03": 3, "2017-01-04": 4}},
        {"name":"Features", "data": {"2017-01-01": 15, "2017-01-02": 30, "2017-01-03": 3, "2017-01-04": 4}},
        {"name":"API", "data": {"2017-01-01": 32, "2017-01-02": 40, "2017-01-03": 3, "2017-01-04": 4}},
        {"name":"UseCases", "data": {"2017-01-01": 52, "2017-01-02": 37, "2017-01-03": 8, "2017-01-04": 56}}
];
    return (
        <Container>
            <br/><br/>
            <Row>
                <Col><Cards/></Col>
                <Col><Cards/></Col>
            </Row>
            <br/><br/><br/>
            <Row>
            <Col>
             <LineChart download={true} data={{"2017-05-13": 2, "2017-05-14": 5, "2017-05-15": 6, "2017-05-16": 1, "2017-05-17": 9, "2017-05-18": 5,"2017-05-19": 7, "2017-05-20": 5}} />
            </Col>
            <Col>
            <PieChart download={true} data={[["Bluebird", 44], ["Vonage", 23],["Zapya", 20], ["Twilio", 13]]} />
            </Col>
            </Row>
            <br/><br/>
            <Row>
            <AreaChart download={true} data={{"2017-01-01 00:00:00 -0800": 2, "2017-01-01 00:01:00 -0800": 5, "2017-01-01 00:02:00 -0800": 20, "2017-01-01 00:03:00 -0800": 5, "2017-01-01 00:04:00 -0800": 12, "2017-01-01 00:05:00 -0800": 1, }} />
            </Row><br/><br/>
            <Row>
            <Col>
            <ColumnChart download={true} data={[["Sun", 32], ["Mon", 46], ["Tue", 28],["Wed", 92], ["Thurs", 66], ["Fri", 88]]} />
            </Col>
            <Col>
            <BarChart download={true} data={[["X-Small", 5], ["Small", 27],["Medium", 30], ["Large", 52],["X-Large", 58], ["XX-Large", 67], ]} />
            </Col>
            </Row><br/><br/>
            <Row>
            <LineChart download={true} data={data} />
            </Row><br/><br/>
        </Container>
    )
}

export default DashboardPage;
