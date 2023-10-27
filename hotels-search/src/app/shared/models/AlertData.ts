import { AlertType } from "../enums/alert-type";

export interface AlertData {
    alertType: AlertType;
    messages: string[];
}