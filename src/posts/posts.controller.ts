import { Controller, Get, Req, Query, Headers, Param, Post, Body } from '@nestjs/common';
import { CreatePostDto } from './post.dto';

@Controller('posts')
export class PostsController {
    @Get()  //Get处理方法，要用@装饰器装饰一下
    index(@Headers('x-hello') headers){   //@Req() request,@Query() query,
        console.log(
            headers
        )
        return [  //用http的get方法请求的都会走index方法
            {
                title:"hello posts"
            }
        ] 
    }

    @Get(':id')
    show(@Param() params) {
        return {
            title: `Post ${params.id}`
        }
    }

    @Post()
    store(@Body() post: CreatePostDto) {
        console.log(post.title)
    }
}
