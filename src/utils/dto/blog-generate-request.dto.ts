import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { BlogType } from '../types/blog-types';
import { BlogContextDto } from './blog-context.dto';

export class BlogGenerateRequestDto {
  @IsNotEmpty()
  @IsEnum(BlogType)
  type: BlogType;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => BlogContextDto)
  context: BlogContextDto;

  @IsOptional()
  @IsBoolean()
  evaluation?: boolean;
}
