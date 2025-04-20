import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class BlogContextDto {
  @IsString()
  title: string;

  @IsString()
  language: string;

  @IsOptional()
  @IsString()
  keys?: string;

  @IsOptional()
  @IsBoolean()
  seo?: boolean;
}
