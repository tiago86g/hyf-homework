-- Homework DB w2

-- 1: Working with tasks
-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task 
(title, description, created, updated, due_date, status_id) 
VALUES ('Homework', 'Upload the homework.', '2020-02-05 06:54:16', '2020-02-05 13:05:09', '2020-02-04 13:05:09', 1);

-- Change the title of a task
UPDATE task
SET title = 'Do not procastinate'
WHERE id = 10; 

-- Change a task due date
UPDATE task
SET due_date = '2020-02-05 06:54:16'
WHERE id = 10; 

-- Change a task status
UPDATE task
SET status_id = 2
WHERE id = 2;

-- Mark a task as complete
UPDATE task
SET status_id = 3
WHERE id = 4;

-- Delete a task
DELETE FROM task
WHERE id = 7;

-- updated