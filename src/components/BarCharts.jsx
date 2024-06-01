// import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ChartContainer = styled.div`
  margin: 20px 0;
`;

export const ChartTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
`;

const BarCharts = ({ data }) => (
    <ChartContainer>
        <h2>Alerts by Severity</h2>
        <BarChart
            width={600}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="severity" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#82ca9d" />
        </BarChart>
    </ChartContainer>
);

BarCharts.propTypes = {
    data: PropTypes.array.isRequired,
};

export default BarCharts;
