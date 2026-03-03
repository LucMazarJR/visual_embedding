'use client'

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

const data = [
  { x: 1, y: -0.8597499190717977 },
  { x: 0.47608670143712883, y: -1 },
  { x: 0.6177812875518145, y: -0.22780899287543377 },
  { x: 0.2497081929139795, y: 0.5398713208598283 },
  { x: -0.3100401206080673, y: 1 },
  { x: -0.24838815568105166, y: 0.21481587664099644 },
  { x: -1, y: -0.201481462445385 },
  { x: -0.5443196846740295, y: -0.5397545233834364 },
  { x: -0.8384742863883435, y: 0.5582494989625169 },
];

export default function CartesianPlane() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ResponsiveContainer>
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />

          {/* Eixo X */}
          <XAxis
            type="number"
            dataKey="x"
            domain={[-1.1, 1.1]}
            tickCount={7}
          />

          {/* Eixo Y */}
          <YAxis
            type="number"
            dataKey="y"
            domain={[-1.1, 1.1]}
            tickCount={7}
          />

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