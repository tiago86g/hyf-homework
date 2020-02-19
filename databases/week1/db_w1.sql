-- 1 Find out how many tasks are in the task table
select count(id)
from task;

-- 2 Find out how many tasks in the task table do not have a valid due date
select count(id)
from task
where due_date IS null;


-- 3 Find all the tasks that are marked as done (what should I do with null response?)
select id
from task
where status_id = 3;

-- 4 Find all the tasks that are not marked as done
select id
from task
where status_id != 3;

-- 5 Get all the tasks, sorted with the most recently created first
select id, created
from task
order by created desc;

-- 6 Get the single most recently created task
select id, created
from task
order by created desc
limit 1;


-- 7 Get the title and due date of all tasks where the title or description contains database
select title, due_date
from task
where title is null or due_date is null;


-- 8 Get the title and status (as text) of all tasks
select title, name
from task join status 
on status.id = task.status_id;


-- 9 Get the name of each status, along with a count of how many tasks have that status
select count(*), name
from task join status on task.status_id = status.id
group by name;


-- 10 Get the names of all statuses, sorted by the status with most tasks first
select name
from task join status on task.status_id = status.id
group by name
order by count(*) desc;
