export interface UpdateHotelRequestDto {
    id: number;
    name: string;
    description: string;
    country: string;
    state: string;
    city: string;
    starsCount: number;
}