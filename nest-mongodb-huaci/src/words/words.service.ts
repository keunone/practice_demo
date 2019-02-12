import { Injectable } from '@nestjs/common';
import { Word } from './words.interface';

export class WordsService {
  private readonly words: Word[] = [];
}
