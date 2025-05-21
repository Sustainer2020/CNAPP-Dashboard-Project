import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Legend,
    Tooltip,
    Label,
} from "recharts";

const renderLabel = ({ viewBox, totalTasks, description }) => {
    const { cx, cy } = viewBox;

    return (
        <g>
            <text
                x={cx}
                y={cy - 10}
                dy={8}
                textAnchor="middle"
                className="font-bold text-lg sm:text-2xl">
                {totalTasks}
            </text>
            <text
                x={cx}
                y={cy + 10}
                dy={8}
                textAnchor="middle"
                className="text-wrap text-sm sm:text-md">
                {description}
            </text>
        </g>
    );
};

const CustomPieChart = ({ data }) => {
    const finalData = data.slice(0, data.length - 1);
    return (
        <ResponsiveContainer width="100%" height={250}>
            <PieChart>
                <Tooltip />
                <Legend
                    verticalAlign="bottom"
                    align="center"
                    layout="horizontal"
                    iconSize={12}
                    iconType="square"
                    wrapperStyle={{ paddingTop: "20px" }}
                />
                <Pie
                    data={finalData}
                    legendType="square"
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius="100%"
                    innerRadius="80%">
                    {data.map((entry, index) => (
                        <Cell
                            className="cursor-pointer"
                            key={`${entry.name}_cell-${index}`}
                            fill={entry.color}
                        />
                    ))}
                    <Label
                        position="center"
                        className="font-bold text-black"
                        content={renderLabel}
                        totalTasks={data[data.length - 1].value}
                        description={data[data.length - 1].name}></Label>
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default CustomPieChart;
