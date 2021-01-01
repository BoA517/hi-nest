import { Controller, Get, Param, Post, Delete, Patch } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will retyrn all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `this will retyrn one movie with the id: ${movieId}`;
  }

  @Post()
  create() {
    return `this will create a movie`;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `this will delete a movie with the id: ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `this will patch a movie with the id: ${movieId}`;
  }
}
