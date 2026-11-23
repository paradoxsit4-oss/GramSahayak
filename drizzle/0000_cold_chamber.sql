CREATE TABLE `complaints` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`phone` text NOT NULL,
	`category` text NOT NULL,
	`location` text NOT NULL,
	`description` text NOT NULL,
	`language` text NOT NULL,
	`status` text DEFAULT 'Submitted' NOT NULL,
	`priority` text DEFAULT 'Pending' NOT NULL,
	`created_at` integer NOT NULL
);
