const Documentation = () => {
    return (
        <>
            <div className="container"></div>
            <div className="layout clearfix">
                <section className="layout-content">
                    <h1>Documentation</h1>
                    <div className="content-box">

                        <p>
                        The PHP Manual is available online in a selection of languages.
                        Please pick a language from the list below.
                        </p>

                        <p>
                        More information about php.net URL shortcuts by visiting our
                        <a href="urlhowto.php">URL howto page</a>.
                        </p>

                        <p>
                        Note, that many languages are just under translation, and
                        the untranslated parts are still in English. Also some translated
                        parts might be outdated. The translation teams are open to
                        contributions.
                        </p>
                    </div>
                    <table className="standard">
                        <tbody>
                            <tr>
                                <th>Formats</th>
                                <th>Destinations</th>
                            </tr>
                            <tr>
                                <th className="sub">View Online</th>
                                <td>
                                    <a href="/manual/en/">English</a>, &nbsp;
                                    <a href="/manual/pt_BR/">Brazilian Portuguese</a>, &nbsp;
                                    <a href="/manual/zh/">Chinese (Simplified)</a>, &nbsp;
                                    <strong><a href="/manual/fr/">French</a>, </strong>&nbsp;
                                    <a href="/manual/de/">German</a>, &nbsp;
                                    <a href="/manual/ja/">Japanese</a>, &nbsp;
                                    <a href="/manual/ru/">Russian</a>, &nbsp;
                                    <a href="/manual/es/">Spanish</a>, &nbsp;
                                    <a href="/manual/tr/">Turkish</a>
                                </td>
                            </tr>
                            <tr>
                                <th className="sub">Downloads</th>
                                <td>
                                    For downloadable formats, please visit our &nbsp;
                                    <a href="download-docs.php">documentation downloads</a> page.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <p>
                        Documentation for PHP 4 and PHP 5 has been removed from the
                        manual, but there are still archived versions still. For
                        more information, please read <a href="/manual/php4.php">
                        Documentation for PHP 4</a> and <a href="manual/php5.php">
                        Documentation for 5</a>, respectively.
                        </p>
                    </div>
                    <h2 className="content-header">More documentation</h2>
                    <ul className="content-box listed">
                        <li>
                            If you are interested in how the documentation is edited and translated,
                            you should read the <a href="http://doc.php.net/tutorial/">Documentation HOWTO</a>.
                        </li>
                        <li>
                            <a href="http://gtk.php.net/">PHP-GTK related documentation</a>
                            is hosted on the PHP-GTK website.
                        </li>
                        <li>
                            <a href="http://pear.php.net/manual/">Documentation of PEAR and the various
                            packages</a> can be found on a separate server.
                        </li>
                        <li>
                            You can still read a copy of the original <a href="/manual/phpfi2.php">PHP/FI
                            2.0 Manual</a> on our site, which we only host for historical purposes.
                            The same applies to the <a href="/manual/php3.php">PHP 3 Manual</a>, and
                            the <a href="/manual/php4.php">PHP 4 Manual</a>.
                        </li>
                    </ul>
                </section>
            </div>
        </>
    )
}

export default Documentation