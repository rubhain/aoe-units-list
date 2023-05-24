export interface IUnitCost {
    [key: string]: any;
  }
  
  export interface IUnit {
    id: number;
    name: string;
    description: string;
    expansion: string;
    age: string;
    cost: IUnitCost | null;
    build_time?: number;
    reload_time?: number;
    attack_delay?: number;
    movement_rate?: number;
    line_of_sight?: number;
    hit_points: number;
    range?: number | string;
    attack?: number;
    armor: string;
    attack_bonus?: string[];
    armor_bonus?: string[];
    blast_radius?: number;
    search_radius?: number;
    accuracy?: string;
  }