import { BaseResponseDto } from "../BaseResponseDto";

export interface GetHotelsResponseDto extends BaseResponseDto {
    id: number;
    name: string;
    description: string;
    country: string;
    state: string;
    city: string;
    starsCount: number;
}