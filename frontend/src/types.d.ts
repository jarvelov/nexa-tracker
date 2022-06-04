export type Measurement = {
  id: string;
  node: string;
  sensor: string;
  timestamp: string | Date;
  value: number;
  createdAt: string | Date;
  updatedAt: string | Date;
};

export type Sensor = {
  id: string;
  name: string;
};

export type Node = {
  id: string;
  name: string;
  nexaId: number;
};
