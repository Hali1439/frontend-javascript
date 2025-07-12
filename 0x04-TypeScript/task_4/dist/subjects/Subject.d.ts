/// <reference path="Teacher.d.ts" />
declare namespace Subjects {
    class Subject {
        teacher: Teacher;
        setTeacher(teacher: Teacher): void;
    }
}
