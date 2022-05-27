import { StatusTask } from "../commons/enums/status-task.enum";

export interface Task {
    id: number;
    title: string;
    description: string;
    status: StatusTask;
}

