# hackumass-backend

# Course

### Get all courses

Get /api/course/all

### Get course

Get /api/course/<course_id>

### Create course

Post /api/course

Body: { fullName, codeName, major, description }

### Update course

Put /api/course

Body: { id, fullName, codeName, major, description }

### Delete course

Delete /api/course

Body: { id }
