import { Equipment } from './equipment';
export interface Room {
    id: string;
    name: string;
    slug: string;
    image: string;
    description?: string;
    capacity: number;
    createdAt?: string;
    updatedAt?: string;
    equipments?: Equipment[];
}
