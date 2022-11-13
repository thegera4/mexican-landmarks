const { Router } = require('express');
const landmarksRoutes = require('./landmarksRoutes');

const router = Router();

router.use('/', landmarksRoutes);
router.use('/landmarks', landmarksRoutes);


module.exports = router;