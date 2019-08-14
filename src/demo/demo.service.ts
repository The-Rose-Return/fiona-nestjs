import { Injectable } from '@nestjs/common';

@Injectable()
export class DemoService {
    private readonly posts: Post[] = [];
}
