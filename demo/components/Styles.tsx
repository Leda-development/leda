import * as React from 'react';

export const Styles = ({ theme }: any): React.ReactElement | null => {
  React.useEffect((): void => {
    const prestyles = document.getElementById('prestyles');

    if (prestyles) {
      prestyles.innerHTML = '';
    }
  }, []);

  if (theme === 'Nova') {
    return (
      <>
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/demo.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/reset.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/fonts.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/rub.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/layouts.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/icons.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/fonts.sbicon-alt.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/fonts.uicon.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/fonts.novicon.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/notices.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/controls.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/nav.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/lists.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/filter.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/popup.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/helpers.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/ui.sb.nova.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" id="leda-styles" href="/assets/css/leda/leda.nova.css" />
      </>
    );
  }

  if (theme === 'Sber') {
    return (
      <>
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/demo.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/kendo/kendo.sb.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/reset.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/fonts.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/rub.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/layouts.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/icons.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/fonts.sbicon-alt.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/fonts.uicon.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/fonts.novicon.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/notices.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/controls.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/nav.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/lists.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/filter.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/popup.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/helpers.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/ui.sb.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/esphere/css/ui.sb.dcb.css" />
        <link rel="stylesheet" type="text/css" media="screen, projection" id="leda-styles" href="/assets/css/leda/leda.sb.css" />
      </>
    );
  }

  if (theme === 'Bootstrap') {
    return (
      <>
        <link rel="stylesheet" type="text/css" media="screen, projection" href="/demo/demo.css" />
        <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" type="text/css" media="screen, projection" id="leda-styles" href="/assets/css/leda/leda.bootstrap.css" />
      </>
    );
  }

  return null;
};
