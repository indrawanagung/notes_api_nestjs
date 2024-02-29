import { IsString, MinLength } from "class-validator"

export class CreateOrUpdateNoteDto {
    @IsString()
    title : string
    @IsString()
    @MinLength(10)
    note : string
}
