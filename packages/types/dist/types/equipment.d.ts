export interface Equipment {
    id: string;
    name: string;
    type: EquipmentTypeEnum;
    description?: string;
    createdAt: string;
    updatedAt: string;
}
export declare const EquipmentType: {
    readonly TELEVISION: "TELEVISION";
    readonly PROJECTOR: "PROJECTOR";
    readonly WIFI: "WIFI";
    readonly COMPUTER: "COMPUTER";
    readonly WHITEBOARD: "WHITEBOARD";
    readonly KITCHEN: "KITCHEN";
    readonly PRINTER: "PRINTER";
    readonly COFFEE_MACHINE: "COFFEE_MACHINE";
    readonly PHONE: "PHONE";
    readonly WATER_FOUNTAIN: "WATER_FOUNTAIN";
};
export type EquipmentTypeEnum = typeof EquipmentType[keyof typeof EquipmentType];
