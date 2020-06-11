-- 3: More queries
SELECT * FROM task;
SELECT * FROM user;
select * FROM status;

-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT  task.title, user.email
FROM task JOIN user_task 
	ON task.id = user_task.task_id
    JOIN user ON user.id = user_task.user_id
WHERE email LIKE '%@spotify.com';

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.title, user.name, task.created
FROM task JOIN user_task 
	ON task.id = user_task.task_id
    JOIN user ON user.id = user_task.user_id
    JOIN status ON status.id = task.status_id
WHERE user.name LIKE 'Donald Duck' AND status.name LIKE 'Not started';

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT task.title, user.name
FROM task JOIN user_task 
	ON task.id = user_task.task_id
    JOIN user ON user.id = user_task.user_id
    JOIN status ON status.id = task.status_id
WHERE user.name LIKE 'Maryrose Meadows' AND month(created) = 09;

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT month(created), count(task.id) 
FROM task
GROUP BY month(created);