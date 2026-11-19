import type { Question } from '../components/Quiz.astro';

interface QuizData {
  questions: Question[];
  mode?: 'instant' | 'final' | 'live';
  title?: string;
  // Optional 1-based selection for the article. The practice bank uses all questions.
  articleQuestionNumbers?: number[];
}

const quizzes = import.meta.glob<{ default: QuizData }>('../data/quizzes/*.json', { eager: true });
const getQuiz = (slug: string): QuizData | undefined => quizzes[`../data/quizzes/${slug}.json`]?.default;

export function getArticleQuiz(slug: string): QuizData | undefined {
  const quiz = getQuiz(slug);
  if (!quiz?.articleQuestionNumbers) return quiz;
  return { ...quiz, questions: quiz.articleQuestionNumbers.map((number) => quiz.questions[number - 1]) };
}

export function questionCount(slug: string): number {
  const quiz = getQuiz(slug);
  return quiz?.articleQuestionNumbers?.length ?? quiz?.questions?.length ?? 0;
}

export const questionBankCount = (slug: string): number => getQuiz(slug)?.questions?.length ?? 0;
