/// <reference path="Teacher.d.ts" />
/// <reference path="Subject.d.ts" />
declare namespace Subjects {
    interface Teacher {
        experienceTeachingC?: number;
    }
    class Cpp extends Subject {
        getRequirements(): string;
        getAvailableTeacher(): string;
    }
}
