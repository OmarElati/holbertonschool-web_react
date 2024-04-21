export interface MajorCredits {
  credits: number,
  brand: "Major"
}

export interface MinorCredits {
  credits: number,
  brand: "Minor"
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "Major"
  }
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits{
  return {
    credits: subject1.credits + subject2.credits,
    brand: "Minor",
  }
}