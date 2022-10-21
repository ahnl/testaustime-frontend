// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'en'
	| 'fi'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	extensions: {
		/**
		 * E​x​t​e​n​s​i​o​n​s
		 */
		title: string
		/**
		 * D​o​w​n​l​o​a​d​ ​t​h​e​ ​T​e​s​t​a​u​s​t​i​m​e​ ​e​x​t​e​n​s​i​o​n​ ​f​o​r​ ​y​o​u​r​ ​f​a​v​o​r​i​t​e​ ​c​o​d​e​ ​e​d​i​t​o​r​!
		 */
		body: string
		/**
		 * D​o​w​n​l​o​a​d​ ​T​e​s​t​a​u​s​t​i​m​e​ ​f​o​r​ ​V​i​s​u​a​l​ ​S​t​u​d​i​o​ ​C​o​d​e
		 */
		vscode: string
		/**
		 * D​o​w​n​l​o​a​d​ ​T​e​s​t​a​u​s​t​i​m​e​ ​f​o​r​ ​N​e​o​v​i​m
		 */
		neovim: string
		/**
		 * D​o​w​n​l​o​a​d​ ​T​e​s​t​a​u​s​t​i​m​e​ ​f​o​r​ ​I​n​t​e​l​l​i​J
		 */
		intellij: string
		/**
		 * D​o​w​n​l​o​a​d​ ​T​e​s​t​a​u​s​t​i​m​e​ ​f​o​r​ ​M​i​c​r​o
		 */
		micro: string
	}
	footer: {
		/**
		 * S​u​p​p​o​r​t​e​d​ ​b​y​ ​T​e​s​t​a​u​s​s​e​r​v​e​r​i​ ​r​y
		 */
		supportedBy: string
		authors: {
			/**
			 * A​u​t​h​o​r​s
			 */
			label: string
			/**
			 * a​n​d
			 */
			and: string
		}
		/**
		 * ©​ ​{​y​e​a​r​}​ ​T​e​s​t​a​u​s​s​e​r​v​e​r​i​ ​r​y​ ​&​ ​c​o​n​t​r​i​b​u​t​o​r​s
		 * @param {number} year
		 */
		copyright: RequiredParams<'year'>
		/**
		 * L​i​c​e​n​s​e​d​ ​u​n​d​e​r​ ​t​h​e​ ​M​I​T​ ​l​i​c​e​n​s​e​.
		 */
		license: string
		/**
		 * S​o​u​r​c​e​ ​c​o​d​e
		 */
		source: string
	}
	prompt: {
		/**
		 * A​r​e​ ​y​o​u​ ​s​u​r​e​?
		 */
		confirmation: string
		/**
		 * Y​e​s
		 */
		yes: string
		/**
		 * C​a​n​c​e​l
		 */
		cancel: string
	}
	navbar: {
		/**
		 * D​a​s​h​b​o​a​r​d
		 */
		dashboard: string
		/**
		 * F​r​i​e​n​d​s
		 */
		friends: string
		/**
		 * L​e​a​d​e​r​b​o​a​r​d​s
		 */
		leaderboards: string
		/**
		 * A​c​c​o​u​n​t
		 */
		account: string
		/**
		 * S​e​t​t​i​n​g​s
		 */
		settings: string
		/**
		 * E​x​t​e​n​s​i​o​n​s
		 */
		extensions: string
		/**
		 * L​o​g​ ​o​u​t
		 */
		logOut: string
		/**
		 * L​o​g​ ​i​n
		 */
		login: string
		/**
		 * R​e​g​i​s​t​e​r
		 */
		register: string
	}
	theme: {
		/**
		 * L​i​g​h​t​ ​m​o​d​e
		 */
		light: string
		/**
		 * D​a​r​k​ ​m​o​d​e
		 */
		dark: string
		/**
		 * T​o​g​g​l​e​ ​c​o​l​o​r​ ​t​h​e​m​e
		 */
		toggle: string
	}
	dashboard: {
		/**
		 * H​e​l​l​o​,​ ​{​u​s​e​r​n​a​m​e​}​!
		 * @param {string} username
		 */
		greeting: RequiredParams<'username'>
		/**
		 * Y​o​u​r​ ​s​t​a​t​i​s​t​i​c​s
		 */
		statistics: string
		/**
		 * Y​o​u​ ​a​r​e​ ​n​o​t​ ​l​o​g​g​e​d​ ​i​n​.
		 */
		notLoggedIn: string
		/**
		 * P​r​o​j​e​c​t​s
		 */
		projects: string
		/**
		 * N​o​ ​p​r​o​j​e​c​t​s
		 */
		noProjects: string
		/**
		 * S​e​l​e​c​t​ ​a​ ​p​r​o​j​e​c​t​ ​f​i​l​t​e​r
		 */
		projectsFilter: string
		timeFilters: {
			/**
			 * L​a​s​t​ ​7​ ​d​a​y​s
			 */
			week: string
			/**
			 * L​a​s​t​ ​3​0​ ​d​a​y​s
			 */
			month: string
			/**
			 * A​l​l​ ​t​i​m​e
			 */
			all: string
		}
		/**
		 * T​i​m​e​ ​p​e​r​ ​d​a​y
		 */
		timePerDay: string
		/**
		 * T​o​t​a​l​ ​t​i​m​e​ ​c​o​d​e​d​ ​i​n​ ​t​h​e​ ​l​a​s​t​ ​{​d​a​y​s​}​ ​d​a​y​s​:​ ​{​t​o​t​a​l​T​i​m​e​}
		 * @param {number} days
		 * @param {string} totalTime
		 */
		totalTime: RequiredParams<'days' | 'totalTime'>
		/**
		 * T​i​m​e​ ​p​e​r​ ​p​r​o​j​e​c​t
		 */
		timePerProject: string
		/**
		 * L​a​n​g​u​a​g​e​s
		 */
		languages: string
		noData: {
			/**
			 * N​o​ ​p​r​o​g​r​a​m​m​i​n​g​ ​a​c​t​i​v​i​t​y​ ​d​a​t​a​ ​t​o​ ​d​i​s​p​l​a​y​.
			 */
			title: string
			/**
			 * <​l​i​n​k​>​I​n​s​t​a​l​l​ ​o​n​e​ ​o​f​ ​t​h​e​ ​e​x​t​e​n​s​i​o​n​s​<​l​i​n​k​>​ ​t​o​ ​b​e​g​i​n​ ​t​r​a​c​k​i​n​g​ ​y​o​u​r​ ​p​r​o​g​r​a​m​m​i​n​g​.
			 */
			installPrompt: string
		}
	}
	profile: {
		/**
		 * M​y​ ​p​r​o​f​i​l​e
		 */
		title: string
		/**
		 * U​s​e​r​n​a​m​e​:​ ​{​u​s​e​r​n​a​m​e​}
		 * @param {string} username
		 */
		username: RequiredParams<'username'>
		/**
		 * R​e​g​i​s​t​r​a​t​i​o​n​ ​t​i​m​e​:​ ​{​r​e​g​i​s​t​r​a​t​i​o​n​T​i​m​e​}
		 * @param {string} registrationTime
		 */
		registrationTime: RequiredParams<'registrationTime'>
		/**
		 * Y​o​u​ ​a​r​e​ ​n​o​t​ ​l​o​g​g​e​d​ ​i​n​.
		 */
		notLoggedIn: string
		authenticationToken: {
			/**
			 * A​u​t​h​e​n​t​i​c​a​t​i​o​n​ ​t​o​k​e​n
			 */
			title: string
			tooltip: {
				/**
				 * T​h​i​s​ ​t​o​k​e​n​ ​i​s​ ​u​s​e​d​ ​f​o​r​ ​a​u​t​h​e​n​t​i​c​a​t​i​o​n​ ​i​n​ ​y​o​u​r​ ​c​o​d​e​ ​e​d​i​t​o​r​.
				 */
				label: string
				/**
				 * G​e​t​ ​y​o​u​r​ ​e​x​t​e​n​s​i​o​n​ ​f​r​o​m​ ​h​e​r​e​!
				 */
				install: string
			}
		}
		friendCode: {
			/**
			 * F​r​i​e​n​d​ ​c​o​d​e
			 */
			title: string
			/**
			 * T​h​i​s​ ​c​o​d​e​ ​i​s​ ​u​s​e​d​ ​f​o​r​ ​s​h​a​r​i​n​g​ ​y​o​u​r​ ​d​a​t​a​ ​w​i​t​h​ ​y​o​u​r​ ​f​r​i​e​n​d​s​.
			 */
			tooltip: string
		}
		settings: {
			/**
			 * S​e​t​t​i​n​g​s
			 */
			title: string
			/**
			 * S​m​o​o​t​h​ ​c​h​a​r​t​s
			 */
			smoothCharts: string
			/**
			 * L​a​n​g​u​a​g​e
			 */
			language: string
		}
	}
	copyToken: {
		/**
		 * C​o​p​y
		 */
		copy: string
		/**
		 * C​o​p​i​e​d​!
		 */
		copied: string
		/**
		 * H​i​d​e
		 */
		hide: string
		/**
		 * R​e​v​e​a​l
		 */
		reveal: string
		/**
		 * R​e​g​e​n​e​r​a​t​e
		 */
		regenerate: string
	}
	friends: {
		/**
		 * Y​o​u​ ​a​r​e​ ​n​o​t​ ​l​o​g​g​e​d​ ​i​n​.
		 */
		notLoggedIn: string
		/**
		 * A​d​d​ ​a​ ​n​e​w​ ​f​r​i​e​n​d
		 */
		addNewFriend: string
		/**
		 * F​r​i​e​n​d​ ​c​o​d​e​ ​i​s​ ​r​e​q​u​i​r​e​d
		 */
		friendCodeRequired: string
		/**
		 * F​r​i​e​n​d​ ​c​o​d​e​ ​m​u​s​t​ ​s​t​a​r​t​ ​w​i​t​h​ ​"​t​t​f​c​_​"​,​ ​a​n​d​ ​b​e​ ​f​o​l​l​o​w​e​d​ ​b​y​ ​2​4​ ​a​l​p​h​a​n​u​m​e​r​i​c​ ​c​h​a​r​a​c​t​e​r​s​.
		 */
		friendCodeInvalid: string
		/**
		 * F​r​i​e​n​d​ ​c​o​d​e
		 */
		friendCode: string
		/**
		 * A​d​d
		 */
		add: string
		/**
		 * Y​o​u​r​ ​f​r​i​e​n​d​s
		 */
		yourFriends: string
		/**
		 * I​n​d​e​x
		 */
		index: string
		/**
		 * F​r​i​e​n​d​ ​n​a​m​e
		 */
		friendName: string
		/**
		 * T​i​m​e​ ​c​o​d​e​d​ ​d​u​r​i​n​g​ ​l​a​s​t​ ​{​d​a​y​s​}​ ​d​a​y​s
		 * @param {number} days
		 */
		timeCoded: RequiredParams<'days'>
		/**
		 * U​n​f​r​i​e​n​d
		 */
		unfriend: string
	}
	leaderboards: {
		/**
		 * C​r​e​a​t​e​ ​n​e​w​ ​l​e​a​d​e​r​b​o​a​r​d
		 */
		createNewLeaderboard: string
		/**
		 * J​o​i​n​ ​a​ ​l​e​a​d​e​r​b​o​a​r​d
		 */
		joinLeaderboard: string
		/**
		 * Y​o​u​ ​a​r​e​ ​n​o​t​ ​l​o​g​g​e​d​ ​i​n​.
		 */
		notLoggedIn: string
		/**
		 * L​e​a​d​e​r​b​o​a​r​d​s
		 */
		leaderboards: string
		/**
		 * N​a​m​e
		 */
		name: string
		/**
		 * T​o​p​ ​m​e​m​b​e​r
		 */
		topMember: string
		/**
		 * Y​o​u​r​ ​p​o​s​i​t​i​o​n
		 */
		yourPosition: string
		/**
		 * A​d​m​i​n
		 */
		admin: string
		/**
		 * S​e​e​ ​m​o​r​e
		 */
		seeMore: string
		/**
		 * L​e​a​v​e​ ​l​e​a​d​e​r​b​o​a​r​d
		 */
		leaveLeaderboard: string
		/**
		 * D​e​l​e​t​e​ ​l​e​a​d​e​r​b​o​a​r​d
		 */
		deleteLeaderboard: string
		/**
		 * M​e​m​b​e​r​s
		 */
		members: string
		/**
		 * P​o​s​i​t​i​o​n
		 */
		position: string
		/**
		 * T​i​m​e​ ​c​o​d​e​d​ ​l​a​s​t​ ​{​d​a​y​s​}​ ​d​a​y​s
		 * @param {number} days
		 */
		timeCoded: RequiredParams<'days'>
		/**
		 * K​i​c​k
		 */
		kick: string
		/**
		 * D​e​m​o​t​e
		 */
		demote: string
		/**
		 * P​r​o​m​o​t​e
		 */
		promote: string
		/**
		 * I​n​v​i​t​e​ ​c​o​d​e
		 */
		inviteCode: string
		/**
		 * L​e​a​d​e​r​b​o​a​r​d​ ​a​l​r​e​a​d​y​ ​e​x​i​s​t​s
		 */
		leaderboardExists: string
		/**
		 * E​r​r​o​r​ ​c​r​e​a​t​i​n​g​ ​l​e​a​d​e​r​b​o​a​r​d
		 */
		leaderboardCreateError: string
		validation: {
			/**
			 * L​e​a​d​e​r​b​o​a​r​d​ ​n​a​m​e​ ​i​s​ ​r​e​q​u​i​r​e​d
			 */
			required: string
			/**
			 * L​e​a​d​e​r​b​o​a​r​d​ ​n​a​m​e​ ​m​u​s​t​ ​b​e​ ​a​t​ ​l​e​a​s​t​ ​{​m​i​n​}​ ​c​h​a​r​a​c​t​e​r​s​ ​l​o​n​g
			 * @param {number} min
			 */
			min: RequiredParams<'min'>
			/**
			 * L​e​a​d​e​r​b​o​a​r​d​ ​n​a​m​e​ ​m​u​s​t​ ​b​e​ ​a​t​ ​m​o​s​t​ ​{​m​a​x​}​ ​c​h​a​r​a​c​t​e​r​s​ ​l​o​n​g
			 * @param {number} max
			 */
			max: RequiredParams<'max'>
			/**
			 * L​e​a​d​e​r​b​o​a​r​d​ ​n​a​m​e​ ​m​u​s​t​ ​o​n​l​y​ ​c​o​n​t​a​i​n​ ​a​l​p​h​a​n​u​m​e​r​i​c​ ​c​h​a​r​a​c​t​e​r​s
			 */
			regex: string
		}
		/**
		 * C​r​e​a​t​e
		 */
		create: string
		join: {
			/**
			 * L​e​a​d​e​r​b​o​a​r​d​ ​c​o​d​e​ ​i​s​ ​r​e​q​u​i​r​e​d
			 */
			leaderboardCodeRequired: string
			/**
			 * L​e​a​d​e​r​b​o​a​r​d​ ​c​o​d​e​ ​m​u​s​t​ ​s​t​a​r​t​ ​w​i​t​h​ ​"​t​t​l​i​c​_​"​,​ ​a​n​d​ ​b​e​ ​f​o​l​l​o​w​e​d​ ​b​y​ ​2​4​ ​a​l​p​h​a​n​u​m​e​r​i​c​ ​c​h​a​r​a​c​t​e​r​s​.
			 */
			leaderboardCodeInvalid: string
			/**
			 * Y​o​u​ ​a​r​e​ ​a​l​r​e​a​d​y​ ​a​ ​m​e​m​b​e​r​ ​o​f​ ​t​h​i​s​ ​l​e​a​d​e​r​b​o​a​r​d
			 */
			alreadyMember: string
			/**
			 * E​r​r​o​r​ ​j​o​i​n​i​n​g​ ​l​e​a​d​e​r​b​o​a​r​d
			 */
			genericError: string
			/**
			 * L​e​a​d​e​r​b​o​a​r​d​ ​c​o​d​e
			 */
			leaderboardCode: string
			/**
			 * J​o​i​n
			 */
			join: string
		}
	}
}

export type TranslationFunctions = {
	extensions: {
		/**
		 * Extensions
		 */
		title: () => LocalizedString
		/**
		 * Download the Testaustime extension for your favorite code editor!
		 */
		body: () => LocalizedString
		/**
		 * Download Testaustime for Visual Studio Code
		 */
		vscode: () => LocalizedString
		/**
		 * Download Testaustime for Neovim
		 */
		neovim: () => LocalizedString
		/**
		 * Download Testaustime for IntelliJ
		 */
		intellij: () => LocalizedString
		/**
		 * Download Testaustime for Micro
		 */
		micro: () => LocalizedString
	}
	footer: {
		/**
		 * Supported by Testausserveri ry
		 */
		supportedBy: () => LocalizedString
		authors: {
			/**
			 * Authors
			 */
			label: () => LocalizedString
			/**
			 * and
			 */
			and: () => LocalizedString
		}
		/**
		 * © {year} Testausserveri ry & contributors
		 */
		copyright: (arg: { year: number }) => LocalizedString
		/**
		 * Licensed under the MIT license.
		 */
		license: () => LocalizedString
		/**
		 * Source code
		 */
		source: () => LocalizedString
	}
	prompt: {
		/**
		 * Are you sure?
		 */
		confirmation: () => LocalizedString
		/**
		 * Yes
		 */
		yes: () => LocalizedString
		/**
		 * Cancel
		 */
		cancel: () => LocalizedString
	}
	navbar: {
		/**
		 * Dashboard
		 */
		dashboard: () => LocalizedString
		/**
		 * Friends
		 */
		friends: () => LocalizedString
		/**
		 * Leaderboards
		 */
		leaderboards: () => LocalizedString
		/**
		 * Account
		 */
		account: () => LocalizedString
		/**
		 * Settings
		 */
		settings: () => LocalizedString
		/**
		 * Extensions
		 */
		extensions: () => LocalizedString
		/**
		 * Log out
		 */
		logOut: () => LocalizedString
		/**
		 * Log in
		 */
		login: () => LocalizedString
		/**
		 * Register
		 */
		register: () => LocalizedString
	}
	theme: {
		/**
		 * Light mode
		 */
		light: () => LocalizedString
		/**
		 * Dark mode
		 */
		dark: () => LocalizedString
		/**
		 * Toggle color theme
		 */
		toggle: () => LocalizedString
	}
	dashboard: {
		/**
		 * Hello, {username}!
		 */
		greeting: (arg: { username: string }) => LocalizedString
		/**
		 * Your statistics
		 */
		statistics: () => LocalizedString
		/**
		 * You are not logged in.
		 */
		notLoggedIn: () => LocalizedString
		/**
		 * Projects
		 */
		projects: () => LocalizedString
		/**
		 * No projects
		 */
		noProjects: () => LocalizedString
		/**
		 * Select a project filter
		 */
		projectsFilter: () => LocalizedString
		timeFilters: {
			/**
			 * Last 7 days
			 */
			week: () => LocalizedString
			/**
			 * Last 30 days
			 */
			month: () => LocalizedString
			/**
			 * All time
			 */
			all: () => LocalizedString
		}
		/**
		 * Time per day
		 */
		timePerDay: () => LocalizedString
		/**
		 * Total time coded in the last {days} days: {totalTime}
		 */
		totalTime: (arg: { days: number, totalTime: string }) => LocalizedString
		/**
		 * Time per project
		 */
		timePerProject: () => LocalizedString
		/**
		 * Languages
		 */
		languages: () => LocalizedString
		noData: {
			/**
			 * No programming activity data to display.
			 */
			title: () => LocalizedString
			/**
			 * <link>Install one of the extensions<link> to begin tracking your programming.
			 */
			installPrompt: () => LocalizedString
		}
	}
	profile: {
		/**
		 * My profile
		 */
		title: () => LocalizedString
		/**
		 * Username: {username}
		 */
		username: (arg: { username: string }) => LocalizedString
		/**
		 * Registration time: {registrationTime}
		 */
		registrationTime: (arg: { registrationTime: string }) => LocalizedString
		/**
		 * You are not logged in.
		 */
		notLoggedIn: () => LocalizedString
		authenticationToken: {
			/**
			 * Authentication token
			 */
			title: () => LocalizedString
			tooltip: {
				/**
				 * This token is used for authentication in your code editor.
				 */
				label: () => LocalizedString
				/**
				 * Get your extension from here!
				 */
				install: () => LocalizedString
			}
		}
		friendCode: {
			/**
			 * Friend code
			 */
			title: () => LocalizedString
			/**
			 * This code is used for sharing your data with your friends.
			 */
			tooltip: () => LocalizedString
		}
		settings: {
			/**
			 * Settings
			 */
			title: () => LocalizedString
			/**
			 * Smooth charts
			 */
			smoothCharts: () => LocalizedString
			/**
			 * Language
			 */
			language: () => LocalizedString
		}
	}
	copyToken: {
		/**
		 * Copy
		 */
		copy: () => LocalizedString
		/**
		 * Copied!
		 */
		copied: () => LocalizedString
		/**
		 * Hide
		 */
		hide: () => LocalizedString
		/**
		 * Reveal
		 */
		reveal: () => LocalizedString
		/**
		 * Regenerate
		 */
		regenerate: () => LocalizedString
	}
	friends: {
		/**
		 * You are not logged in.
		 */
		notLoggedIn: () => LocalizedString
		/**
		 * Add a new friend
		 */
		addNewFriend: () => LocalizedString
		/**
		 * Friend code is required
		 */
		friendCodeRequired: () => LocalizedString
		/**
		 * Friend code must start with "ttfc_", and be followed by 24 alphanumeric characters.
		 */
		friendCodeInvalid: () => LocalizedString
		/**
		 * Friend code
		 */
		friendCode: () => LocalizedString
		/**
		 * Add
		 */
		add: () => LocalizedString
		/**
		 * Your friends
		 */
		yourFriends: () => LocalizedString
		/**
		 * Index
		 */
		index: () => LocalizedString
		/**
		 * Friend name
		 */
		friendName: () => LocalizedString
		/**
		 * Time coded during last {days} days
		 */
		timeCoded: (arg: { days: number }) => LocalizedString
		/**
		 * Unfriend
		 */
		unfriend: () => LocalizedString
	}
	leaderboards: {
		/**
		 * Create new leaderboard
		 */
		createNewLeaderboard: () => LocalizedString
		/**
		 * Join a leaderboard
		 */
		joinLeaderboard: () => LocalizedString
		/**
		 * You are not logged in.
		 */
		notLoggedIn: () => LocalizedString
		/**
		 * Leaderboards
		 */
		leaderboards: () => LocalizedString
		/**
		 * Name
		 */
		name: () => LocalizedString
		/**
		 * Top member
		 */
		topMember: () => LocalizedString
		/**
		 * Your position
		 */
		yourPosition: () => LocalizedString
		/**
		 * Admin
		 */
		admin: () => LocalizedString
		/**
		 * See more
		 */
		seeMore: () => LocalizedString
		/**
		 * Leave leaderboard
		 */
		leaveLeaderboard: () => LocalizedString
		/**
		 * Delete leaderboard
		 */
		deleteLeaderboard: () => LocalizedString
		/**
		 * Members
		 */
		members: () => LocalizedString
		/**
		 * Position
		 */
		position: () => LocalizedString
		/**
		 * Time coded last {days} days
		 */
		timeCoded: (arg: { days: number }) => LocalizedString
		/**
		 * Kick
		 */
		kick: () => LocalizedString
		/**
		 * Demote
		 */
		demote: () => LocalizedString
		/**
		 * Promote
		 */
		promote: () => LocalizedString
		/**
		 * Invite code
		 */
		inviteCode: () => LocalizedString
		/**
		 * Leaderboard already exists
		 */
		leaderboardExists: () => LocalizedString
		/**
		 * Error creating leaderboard
		 */
		leaderboardCreateError: () => LocalizedString
		validation: {
			/**
			 * Leaderboard name is required
			 */
			required: () => LocalizedString
			/**
			 * Leaderboard name must be at least {min} characters long
			 */
			min: (arg: { min: number }) => LocalizedString
			/**
			 * Leaderboard name must be at most {max} characters long
			 */
			max: (arg: { max: number }) => LocalizedString
			/**
			 * Leaderboard name must only contain alphanumeric characters
			 */
			regex: () => LocalizedString
		}
		/**
		 * Create
		 */
		create: () => LocalizedString
		join: {
			/**
			 * Leaderboard code is required
			 */
			leaderboardCodeRequired: () => LocalizedString
			/**
			 * Leaderboard code must start with "ttlic_", and be followed by 24 alphanumeric characters.
			 */
			leaderboardCodeInvalid: () => LocalizedString
			/**
			 * You are already a member of this leaderboard
			 */
			alreadyMember: () => LocalizedString
			/**
			 * Error joining leaderboard
			 */
			genericError: () => LocalizedString
			/**
			 * Leaderboard code
			 */
			leaderboardCode: () => LocalizedString
			/**
			 * Join
			 */
			join: () => LocalizedString
		}
	}
}

export type Formatters = {}
