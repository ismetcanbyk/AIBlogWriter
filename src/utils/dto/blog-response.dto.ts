import { IsString, IsArray } from 'class-validator';
import { BlogType } from '../types/blog-types';

export class BaseBlogResponseDto {
  @IsString()
  title: string;

  @IsString()
  meta_description: string;

  @IsArray()
  @IsString({ each: true })
  keywords: string[];

  @IsString()
  introduction: string;

  @IsString()
  content: string;
}

export class MarkdownBlogResponseDto extends BaseBlogResponseDto {}
export class JsonBlogResponseDto extends BaseBlogResponseDto {}

export class BlogResponseFactory {
  static createFromType(type: BlogType, data: any): BaseBlogResponseDto {
    if (type === BlogType.MARKDOWN) {
      return this.createMarkdownResponse(data);
    } else if (type === BlogType.JSON) {
      return this.createJsonResponse(data);
    }
    throw new Error(`Unsupported blog type`);
  }

  private static createMarkdownResponse(data: any): MarkdownBlogResponseDto {
    const response = new MarkdownBlogResponseDto();
    this.mapCommonFields(response, data);
    return response;
  }

  private static createJsonResponse(data: any): JsonBlogResponseDto {
    const response = new JsonBlogResponseDto();
    this.mapCommonFields(response, data);
    return response;
  }

  private static mapCommonFields(
    response: BaseBlogResponseDto,
    data: any,
  ): void {
    response.title = data.title;
    response.meta_description = data.meta_description;
    response.keywords = Array.isArray(data.keywords) ? data.keywords : [];
    response.introduction = data.introduction;
    response.content = data.content;
  }
}
