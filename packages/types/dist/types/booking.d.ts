import { Room } from './room';
import { User } from './user';
export interface Booking {
    id: string;
    title: string;
    description?: string;
    room: Room;
    user: User;
    dateEnd: string;
    dateStart: string;
    createdAt: string;
    updatedAt: string;
}
