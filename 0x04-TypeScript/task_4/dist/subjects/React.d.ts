/// <reference path="Teacher.d.ts" />
/// <reference path="Subject.d.ts" />
declare namespace Subjects {
    interface Teacher {
        experienceTeachingReact?: number;
    }
    class React extends Subject {
        getRequirements(): string;
        getAvailableTeacher(): string;
    }
}
