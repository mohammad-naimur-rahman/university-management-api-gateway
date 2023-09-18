import { Router } from 'express';
import { AcademicSemesterController } from './academicSemester.controller';

const router = Router();

router.get('/', AcademicSemesterController.getAllFromDB);
router.get('/:id', AcademicSemesterController.getByIdFromDB);

router.post('/', AcademicSemesterController.insertIntoDB);

router.patch('/:id', AcademicSemesterController.updateOneIntoDB);

router.delete('/:id', AcademicSemesterController.deleteByIdFromDB);

export const academicSemesterRoutes = router;
