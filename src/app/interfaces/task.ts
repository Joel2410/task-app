import { StatusTask } from "../commons/enums/status-task.enum";

export interface Task {
    id?: string;
    title?: string;
    description?: string;
    status?: StatusTask;
    createdAt?: Date;
    collapsed?: boolean;
}

