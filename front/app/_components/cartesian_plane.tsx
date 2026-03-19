"use client";

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

type CartesianPlaneProps = {
  data: {x: number, y: number}[]
}

export default function CartesianPlane({data}: CartesianPlaneProps) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ResponsiveContainer>
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />

          {/* Eixo X */}
          <XAxis type="number" dataKey="x" domain={[-1.1, 1.1]} tickCount={7} />

          {/* Eixo Y */}
          <YAxis type="number" dataKey="y" domain={[-1.1, 1.1]} tickCount={7} />

          {/* Linha vertical no X = 0 */}
          <ReferenceLine x={0} stroke="black" />

          {/* Linha horizontal no Y = 0 */}
          <ReferenceLine y={0} stroke="black" />

          <Tooltip />

          <Scatter data={data} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
