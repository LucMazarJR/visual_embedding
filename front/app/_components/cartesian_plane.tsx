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
  data: { points: { x: number, y: number }, sentence: { phrase: string, isEmpty: boolean } }[]
}

type ChartPoint = { points: { x: number; y: number }; sentence: { phrase: string, isEmpty: boolean } };

type CustomTooltipProps = {
  active?: boolean;
  payload?: Array<{ payload: ChartPoint }>;
};

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (!active || !payload || payload.length === 0) return null;

  const point = payload[0]?.payload;

  if (!point) return null;

  return (
    <div className="rounded-md border border-gray-200 bg-white p-2 text-sm shadow">
      <p className="font-semibold text-gray-800">{point.sentence.phrase}</p>
      <p className="text-gray-500">
        x: {point.points?.x?.toFixed(3)} | y: {point.points?.y?.toFixed(3)}
      </p>
    </div>
  );
}

export default function CartesianPlane({ data }: CartesianPlaneProps) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <ResponsiveContainer>
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />

          {/* Eixo X */}
          <XAxis type="number" dataKey="points.x" domain={[-1.1, 1.1]} tickCount={7} />

          {/* Eixo Y */}
          <YAxis type="number" dataKey="points.y" domain={[-1.1, 1.1]} tickCount={7} />

          {/* Linha vertical no X = 0 */}
          <ReferenceLine x={0} stroke="black" />

          {/* Linha horizontal no Y = 0 */}
          <ReferenceLine y={0} stroke="black" />

          <Tooltip content={<CustomTooltip />} />

          <Scatter data={data} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
