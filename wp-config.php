<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'twb' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '{U87~b?Gol9{M;n^(G^v <u@n;YtuMuYNHo-53Kec.M|g@3t](6[@L6p{d,V-bx ' );
define( 'SECURE_AUTH_KEY',  'e .q-S/v=f9P[,*8iIf8&Y3>(#0,&yH`H`LpoKGfv_X=XF3g7^_n|+*B!7wnBr5i' );
define( 'LOGGED_IN_KEY',    '5*Hu5UK772!H$}o2E.g}m`J[gkp(YCV.88bIJ+g[g&gRo466Q3Vi({[r39Z?D7v6' );
define( 'NONCE_KEY',        'MkPO)Bm!|cRNg?FD|km91/X!rp%r>f9I FUC6rqt<wf}/bbk+w `rxuc>5y<9Sd=' );
define( 'AUTH_SALT',        'E9@@{W({72aSS4D8LI:=]MwCEOvTzShnvY)D7h_>s3j3OFzIf~UTegTLuw13&qnp' );
define( 'SECURE_AUTH_SALT', '<,t0iAAx7Uwqljjj$3t$Q]X]0S;/%VSkM)A&S`+g!E#OA}{ wtE8taYmV3xTW|,J' );
define( 'LOGGED_IN_SALT',   'FVfp;a@!VwgZW!p/<@U#)TLARj~-Ft3EE3G!~5(vVih5I[>3l.Qy>[a*8=f$||TK' );
define( 'NONCE_SALT',       'a8jwZ%d,l7nJYY?h?XNC p:>.|ueB;x_R*zOfEsg`,Ku:Y+2EXqxDZ7qM5g|%y.f' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
