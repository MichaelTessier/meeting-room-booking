import { User } from './user';
import { Room } from './room';
export interface Booking {
    id: string;
    title: string;
    description?: string;
    room: Room;
    user: User;
    isPending: boolean;
    dateEnd: string;
    dateStart: string;
    createdAt: string;
    updatedAt: string;
}
export type BookingUpdate = Omit<Booking, 'createdAt' | 'updatedAt'>;
