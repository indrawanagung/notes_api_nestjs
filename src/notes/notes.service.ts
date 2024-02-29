import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrUpdateNoteDto } from './dto/create-note.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NotesService {
  constructor(
    private prisma : PrismaService
  ){}

  async create(createNoteDto: CreateOrUpdateNoteDto) {
    await this.prisma.notes.create({
      data :createNoteDto
    })
  }

  async findAll() {
    return await this.prisma.notes.findMany()
  }

  async findOne(id: number) {
    const note = await this.prisma.notes.findFirst({
      where : {
        id : id
      }
    })
    // check if note is exists
    if (!note)
      throw new NotFoundException(
        'note id is not found',
      );

    return await this.prisma.notes.findFirst({
      where : {
        id : id
      }
    })
  }

  async update(id: number, updateNoteDto: CreateOrUpdateNoteDto) {
    // check if note is exists
    await this.findOne(id)

    return await this.prisma.notes.update({
      where : {
        id : id
      },
      data : updateNoteDto
    })
  }

  async remove(id: number) {
     // check if note is exists
     await this.findOne(id)

    return await this.prisma.notes.delete({
      where : {
        id : id
      }
    })
  }
}
