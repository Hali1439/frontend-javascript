export interface MajorCredits {
    _majorCreditBrand: void;
    credits: number;
}
export interface MinorCredits {
    _minorCreditBrand: void;
    credits: number;
}
export declare function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits;
export declare function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits;
