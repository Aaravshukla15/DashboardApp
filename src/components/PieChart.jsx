// import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ChartContainer = styled.div`
  margin: 20px 0;
`;

export const ChartTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
`;

const PieChartComponent = ({ data, theme }) => (
    <ChartContainer>
        <h2>Alerts by Source IP</h2>
        <PieChart width={400} height={400}>
            <Pie
                data={data}
                cx={200}
                cy={200}
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={theme.colors.primary} />
                ))}
            </Pie>
            <Tooltip />
        </PieChart>
    </ChartContainer>
);

PieChartComponent.propTypes = {
    data: PropTypes.array.isRequired,
    theme: PropTypes.object.isRequired,
};

export default PieChartComponent;
