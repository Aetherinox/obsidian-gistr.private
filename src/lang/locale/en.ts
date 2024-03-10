/*
    @locale     : English (en)
*/

export default
{

    /*
        Base entries
    */

    base_underdev_title:                    'Feature Under Development',
    base_underdev_msg:                      'I am currently working with the developer of OpenGist to make minor changes to how OpenGist pastes appear, including moving the "view raw" button to the bottom so that Obsidian\'s edit button does not overlap.',
    base_opt_enabled:                       'Enabled',
    base_opt_disabled:                      'Disabled',
    base_theme_light:                       'Light',
    base_theme_dark:                        'Dark',
    base_time_am:                           'AM',
    base_time_pm:                           'PM',
    base_debug_loading:                     'Loading {0} v{1} [ {2} ]',
    base_context_nofocus:                   'Obsidian does not have focus, please open a file',

    /*
        Context menu options
    */

    cfg_context_gist_public:                'Save Gist (Github Public)',
    cfg_context_gist_secret:                'Save Gist (Github Secret)',
    cfg_context_gist_copy:                  'Copy Gist URL',

    /*
        Tab > Settings > Header
    */

    cfg_modal_desc:                         'Embed Github and Opengist snippets in your notes. For a detailed set of examples, view the demo vault in the support section.',
    cfg_modal_expand:                       'Expand',

    /*
        Tab > Settings > General
    */

    cfg_tab_ge_title:                       'Global',
    cfg_tab_ge_header:                      'These settings affect all aspects of this plugin, including both Opengist and Github. If you change the trigger keyword, ensure you go back through your existing gist snippets and change the keyword at the top of each codeblock; otherwise embedded gists will not appear.',
    cfg_tab_sy_title:                       'Save & Sync',
    cfg_tab_sy_header:                      'These settings allow you to create gists from your notes. The contents of your notes will be directly uploaded to Github under an existing account. You may also choose to create only new notes, or manage new and existing.',
    cfg_tab_og_title:                       'OpenGist',
    cfg_tab_og_header:                      'Opengist is a self-hosted pastebin powered by Git. All snippets are stored in a Git repository and can be read and/or modified using standard Git commands, or with the web interface. It is similiar to GitHub Gist, but open-source and is self-hosted. OpenGist supports Windows, Linux, and MacOS.',
    cfg_tab_gh_title:                       'Github',
    cfg_tab_gh_header:                      'Github Gists let you store and distribute code snippets without setting up a full-fledged repository. Store snippets such as strings, bash scripts, markdown, text files, and other small pieces of data.',
    cfg_tab_sp_title:                       'Support',
    cfg_tab_ge_keyword_name:                'Trigger keyword',
    cfg_tab_ge_keyword_desc:                'Word to use inside codeblocks to designate as a portal for showing gists',
    cfg_tab_ge_theme_name:                  'Theme',
    cfg_tab_ge_theme_desc:                  'This determines what color scheme will be used for gists. You can however, customize the colors in the Github and OpenGist categories below. MUST reload your note for the new stylesheet to be loaded.',
    cfg_tab_ge_wrap_name:                   'Text wrapping',
    cfg_tab_ge_wrap_desc:                   'If enabled, text will wrap to the next line. If disabled, you will see a horizontal scrollbar. This does not include gists that have no spaces anywhere in the body.',
    cfg_tab_ge_notitime_name:               'Notification duration',
    cfg_tab_ge_notitime_desc:               'How long a notification will display for (in seconds). Set to <span class="gistr-settings-elm-important">0</span> to keep notification up until user dismisses it.',

    /*
        Tab > Settings > OpenGist
    */

    cfg_tab_og_cb_light_name:               'Codeblock bg (Light)',
    cfg_tab_og_cb_light_desc:               'Color for Github codeblock background color <span class="gistr-settings-lbl-theme-light">(Light Theme)</span>',
    cfg_tab_og_cb_dark_name:                'Codeblock bg (Dark)',
    cfg_tab_og_cb_dark_desc:                'Color for Github codeblock background color <span class="gistr-settings-lbl-theme-dark">(Dark Theme)</span>',
    cfg_tab_og_sb_light_name:               'Scrollbar track (Light)',
    cfg_tab_og_sb_light_desc:               'Color for gist scrollbar track <span class="gistr-settings-lbl-theme-light">(Light Theme)</span>',
    cfg_tab_og_sb_dark_name:                'Scrollbar track (Dark)',
    cfg_tab_og_sb_dark_desc:                'Color for gist scrollbar track <span class="gistr-settings-lbl-theme-dark">(Dark Theme)</span>',
    cfg_tab_og_tx_light_name:               'Codeblock text (Light)',
    cfg_tab_og_tx_light_desc:               'Color for codeblock text color <span class="gistr-settings-lbl-theme-light">(Light Theme)</span>',
    cfg_tab_og_tx_dark_name:                'Codeblock text (Dark)',
    cfg_tab_og_tx_dark_desc:                'Color for codeblock text color <span class="gistr-settings-lbl-theme-dark">(Dark Theme)</span>',
    cfg_tab_og_opacity_name:                'Codeblock opacity',
    cfg_tab_og_opacity_desc:                'Total opacity for codeblock. Do not set this too low, or your codeblocks will be invisible',
    cfg_tab_og_padding_top_name:            'Padding: top',
    cfg_tab_og_padding_top_desc:            'Padding between gist codeblock header and code.',
    cfg_tab_og_padding_bottom_name:         'Padding: bottom',
    cfg_tab_og_padding_bottom_desc:         'Padding between gist codeblock and the bottom scrollbar.',
    cfg_tab_og_css_name:                    'Custom CSS',
    cfg_tab_og_css_desc:                    'This textarea allows you to enter custom CSS properties to override existing colors.',
    cfg_tab_og_css_pholder:                 'Paste CSS here',

    /*
        Tab > Settings > Github
    */

    cfg_tab_gh_cb_light_name:               'Codeblock bg (Light)',
    cfg_tab_gh_cb_light_desc:               'Color for Opengist codeblock background color <span class="gistr-settings-lbl-theme-light">(Light Theme)</span>',
    cfg_tab_gh_cb_dark_name:                'Codeblock bg (Dark)',
    cfg_tab_gh_cb_dark_desc:                'Color for Opengist codeblock background color <span class="gistr-settings-lbl-theme-dark">(Dark Theme)</span>',
    cfg_tab_gh_sb_light_name:               'Scrollbar track (Light)',
    cfg_tab_gh_sb_light_desc:               'Color for gist scrollbar track <span class="gistr-settings-lbl-theme-light">(Light Theme)</span>',
    cfg_tab_gh_sb_dark_name:                'Scrollbar track (Dark)',
    cfg_tab_gh_sb_dark_desc:                'Color for gist scrollbar track <span class="gistr-settings-lbl-theme-dark">(Dark Theme)</span>',
    cfg_tab_gh_tx_light_name:               'Codeblock text (Light)',
    cfg_tab_gh_tx_light_desc:               'Color for codeblock text color <span class="gistr-settings-lbl-theme-light">(Light Theme)</span>',
    cfg_tab_gh_tx_dark_name:                'Codeblock text (Dark)',
    cfg_tab_gh_tx_dark_desc:                'Color for codeblock text color <span class="gistr-settings-lbl-theme-dark">(Dark Theme)</span>',
    cfg_tab_gh_opacity_name:                'Codeblock opacity',
    cfg_tab_gh_opacity_desc:                'Total opacity for codeblock. Do not set this too low, or your codeblocks will be invisible',
    cfg_tab_gh_css_name:                    'Custom CSS',
    cfg_tab_gh_css_desc:                    'This textarea allows you to enter custom CSS properties to override existing colors.',
    cfg_tab_gh_css_pholder:                 'Paste CSS here',
    cfg_tab_gh_pat_name:                    'Personal Access Token',
    cfg_tab_gh_pat_desc:                    'The personal access token (PAT) generated on Github.com which allows you to write gists from your Obsidian vault to Github gist.',
    cfg_tab_gh_pat_pholder:                 'githubpat_XXXXXX',
    cfg_tab_gh_pat_state_show:              'Show token',
    cfg_tab_gh_pat_state_hide:              'Hide token',
    cfg_tab_gh_pat_desc_l1:                 'This token allows you to authenticate with the GitHub API.<br>Create Token: <a href="https://github.com/settings/tokens?type=beta">here</a>',
    cfg_tab_gh_pat_desc_l2:                 'For this to function with secret gists, select <span class="gistr-settings-lbl-important">"All repositories"</span> or <span class="gistr-settings-lbl-important">"Only select repositories"</span> from the dropdown on the Github Token page. The token must have at least the following permissions:',
    cfg_tab_gh_pat_perm_1:                  '<span class="gistr-settings-elm-li-title">Account Permissions ► Gists</span> <span class="gistr-settings-elm-li-perm">                                                                          Read-and-write</span>',
    cfg_tab_gh_pat_perm_2:                  '<span class="gistr-settings-elm-li-title">Repository Permissions ► Pull Requests</span> <span class="gistr-settings-elm-li-perm">                                      Read-only</span>',
    cfg_tab_gh_pat_perm_3:                  '<span class="gistr-settings-elm-li-title">Repository Permissions ► Contents</span> <span class="gistr-settings-elm-li-perm">                                                    Read-only</span>',
    cfg_tab_gh_pat_perm_4:                  '<span class="gistr-settings-elm-li-title">Repository Permissions ► Issues</span> <span class="gistr-settings-elm-li-perm">                                                              Read-only</span>',
    cfg_tab_gh_pat_footer:                  'Github icon to the right will turn into a checkmark when you\'ve entered a valid token.',
    cfg_tab_gh_pat_help:                    '<b>What is this for?</b> <a href="https://github.com/Aetherinox/obsidian-gistr/wiki/2.-Usage#github-tab">Read the docs</a>',
    cfg_tab_gh_pat_btn_tip:                 'Generate Github API Token',
    cfg_tab_gh_pat_btn_url:                 'https://github.com/settings/tokens?type=beta',
    cfg_tab_gh_pat_btn_tip_ok:              'Valid Github API Token',
    cfg_tab_gh_pat_btn_tip_bad:             'Invalid Github API Token entered\n\nClick here to generate one',
    cfg_tab_gh_pat_btn_tip_invalid:         'Github API token is not valid, ensure you type it correctly\n\nClick here to generate one',
    cfg_tag_gh_pat_notice_msg:              'Gistr has detected a valid Github personal access token which has been saved',
    cfg_tab_gh_pat_notice_type_fine:        'Fine-Grained Github Token Detected',
    cfg_tab_gh_pat_notice_type_classic:     'Classic Github Token Detected',

    /*
        Tab > Settings > Support
    */

    cfg_tab_su_desc:                        'The following buttons are associated to useful resources for this plugin.',
    cfg_tab_su_gs_name:                     'Introduction',
    cfg_tab_su_gs_desc:                     'View brief introduction to getting started with this plugin',
    cfg_tab_su_gs_btn:                      'Open',
    cfg_tab_su_repo_label:                  'Plugin repo',
    cfg_tab_su_repo_url:                    'https://github.com/Aetherinox/obsidian-gistr',
    cfg_tab_su_repo_btn:                    'View',
    cfg_tab_su_vault_label:                 'Plugin demo vault',
    cfg_tab_su_vault_url:                   'https://github.com/Aetherinox/obsidian-gistr/tree/main/tests/gistr-vault',
    cfg_tab_su_vault_btn:                   'View',
    cfg_tab_su_ogrepo_label:                'OpenGist: download',
    cfg_tab_su_ogrepo_url:                  'https://github.com/thomiceli/opengist/releases',
    cfg_tab_su_ogrepo_btn:                  'View',
    cfg_tab_su_ogdocs_label:                'OpenGist: docs',
    cfg_tab_su_ogdocs_url:                  'https://github.com/thomiceli/opengist/blob/master/docs/index.md',
    cfg_tab_su_ogdocs_btn:                  'View',
    cfg_tab_su_ogdemo_label:                'OpenGist: demo',
    cfg_tab_su_ogdemo_url:                  'https://opengist.thomice.li/all',
    cfg_tab_su_ogdemo_btn:                  'View',
    cfg_tab_su_gist_label:                  'Github gist',
    cfg_tab_su_gist_url:                    'https://gist.github.com/',
    cfg_tab_su_gist_btn:                    'View',

    /*
        Tab > Sync
    */

    cfg_tab_sy_list_icon_name:              'Gist list icon color',
    cfg_tab_sy_list_icon_desc:              'Color for icon in gist save list',

    cfg_tab_sy_tog_updatecreate_name:       'Allow updating gists',
    cfg_tab_sy_tog_updatecreate_desc:       '<span class="gistr-settings-elm-note">Enabled</span>: after you initially create a new gist, the note can be updated with newer revisions.<br><br><span class="gistr-settings-elm-important">Disabled</span>: gists can only be created; no updates are allowed.<br><br>To update a gist after enabling this setting, right-click on the note, or open the Obsidian command palette and select <span class="gistr-settings-elm-note"><b>Save Gist</b></span>',
    cfg_tab_sy_tog_updatecreate_tip:        '',

    cfg_tab_sy_tog_autosave_enable_name:    'Enable autosave',
    cfg_tab_sy_tog_autosave_enable_desc:    '<span class="gistr-settings-elm-note">Enabled</span>: this will allow gists to be updated once they are created. It will also enable autosaving which will detect new changes and push them.<br><br><span class="gistr-settings-elm-important">Disabled</span>: you will only be able to create gists by manually doing so; there will be no way to update them.<br><br>If you wish to keep this disabled, you can create gists by right-clicking in the note and selecting <span class="gistr-settings-elm-note">Save Gist</span>. Or opening your command palette and selecting the save option from there.',
    cfg_tab_sy_tog_autosave_enable_tip:     '',

    cfg_tab_sy_tog_autosave_strict_name:    'Enable autosave strict saving',
    cfg_tab_sy_tog_autosave_strict_desc:    '<span class="gistr-settings-elm-note">Enabled</span>: your notes will be saved to the gist service precisely on time every <span class="gistr-settings-elm-note">{0} seconds</span>, whether you are still typing or not.<br><br><span class="gistr-settings-elm-important">Disabled</span>: time until save will not start until you have finished typing in that note. If you continue typing, the saving countdown will not start until your final key is pressed.<br><br>Autosave duration can be modified further down in these settings.',
    cfg_tab_sy_tog_autosave_strict_tip:     '',

    cfg_tab_sy_tog_autosave_noti_name:      'Enable autosave notices',
    cfg_tab_sy_tog_autosave_noti_desc:      'Each time your note is saved automatically, a notice will appear on-screen informing you of the action. This only works if <span class="gistr-settings-elm-note">Autosave</span> is enabled.',
    cfg_tab_sy_tog_autosave_noti_tip:       '',

    cfg_tab_sy_num_save_dur_name:           'Autosave duration',
    cfg_tab_sy_num_save_dur_desc:           'How often autosave will execute <span class="gistr-settings-elm-note">in seconds</span>. Set this to a fair amount so that the calls aren\'t being ran excessively to the gist API server (Github or OpenGist).<br><br>The save countdown timer will begin shortly after you stop typing.<br><br>If you wish to change this to save precisely every <span class="gistr-settings-elm-note">{0} seconds</span>, enable the setting <span class="gistr-settings-elm-note">Autosave Strict Saving</span> located above.',

    cfg_tab_sy_tog_inc_fm_name:             'Include frontmatter',
    cfg_tab_sy_tog_inc_fm_desc:             'When saving a note as a new gist, frontmatter will be added to the top of your note with information about the gist.<br><br><span class="gistr-settings-elm-note">Enabled</span>: the note will be cleaned before it is pushed to the gist service and no frontmatter fields will be present in the online version.<br><br><span class="gistr-settings-elm-important">Disabled</span>: frontmatter added to your notes will be included when your note is pushed to a gist service.<br><br>Frontmatter can be found at the very top of each note, in-between <span class="gistr-settings-elm-note"> `---` </span>',
    cfg_tab_sy_tog_inc_fm_tip:              'Frontmatter starts with three hyphens `---`',

    /*
        Gists
    */

    gist_upload_req_allowupload:            'Must enable \"Allow Uploading Gists\" in the Gistr settings before you can use this command.',
    gist_upload_no_active_file:             'No active file present. Open a note in Obsidian before continuing.',
    gist_copy_fail_notagist:                'No URL to copy. You must turn your note into a gist first.',
    gist_copy_success_file:                 `Copied {0} URL to your clipboard`,
    gist_copy_success:                      'Copied gist URL to clipboard.',
    gist_upload_fail_api:                   'GitHub API error: {0}',
    gist_upload_success:                    'File {0} has been updated successfully to your gist service.',
    gist_status_connecting:                 'connecting ...',
    gist_status_operational:                'operational',
    gist_status_connected:                  'Connected to API ...',
    gist_status_issues:                     'service issues',
    gist_status_btn_connecting:             'Connecting to Github ...',
    gist_status_btn_success:                'Connected to Github API',
    gist_status_btn_issues:                 'Github API is currently experiencing issues\n\nClick to view details.',
    gist_btn_create_new:                    'Create New Gist',
    gist_not_found:                         `Could not locate the specified Gist. Did you possibly delete it from Github?\n\nTo update this note as a new gist, remove the frontmatter text at the top of the note.`,

    /*
        Getting Started
    */

    gs_base_header:                         'This plugin allows you to integrate both OpenGist and Github Gist pastes within your Obsidian notes. To use this plugin, you can either create a new Github gist, or setup your own OpenGist server. OpenGist is free, and takes only minutes to configure.',
    gs_og_btn_repo:                         'Download OpenGist',
    gs_og_btn_docs:                         'OpenGist Docs',
    gs_og_sub_1:                            'Once you install and set up OpenGist, you can sign in to your OpenGist website and create your first Gist. After your Gist is created, return to your Obsidian node, and integrate your Gist into your note using code similar to the following:',
    gs_og_name:                             'OpenGist integration',
    gs_og_desc:                             'OpenGist supports Windows, Linux, MacOS, and Docker. To download and set up OpenGist, click below.',
    gs_gh_name:                             'Github integration',
    gs_gh_desc:                             'To paste a Github Gist into your note, use a command similar to the following examples:',
    gs_btn_settings_open:                   'Open Settings',
    gs_btn_close:                           'Close',

    /*
        Bithub
    */

    gh_status_error_api:                    'Github API Error: {0}',

    /*
        Version Updates
    */

    ver_update_stable:                      'An update is available for the Gistr plugin. Update to check out the latest features!',
    ver_update_beta:                        'A new beta release is available for the Gistr plugin. Update to check out the latest features coming to stable!',
    ver_url:                                'https://raw.githubusercontent.com/Aetherinox/obsidian-gistr/{0}/package.json',

    /*
        Element > Color Picker
    */

    pickr_dialog:                           'Color Picker',
    pickr_swatch:                           'Color Swatch',
    pickr_toggle:                           'Pick Color',
    pickr_last:                             'Use Last Color',
    pickr_save:                             'Save',
    pickr_cancel:                           'Cancel',
    pickr_clear:                            'Clear',
    pickr_tip_restore_default:              'Restore default color',
    pickr_dev_unknown:                      'Gistr: Unknown color format: {0}',

    /*
        Gist Load Error
    */

    err_gist_token_missing:                 'Github API token missing. Open the Gistr plugin settings, click the Github tab, and enter your token. Instructions are found on the settings page.',
    err_gist_loading_fail_name:             '⚠️ Gistr: Failed to load the specified gist:',
    err_gist_loading_fail_resp:             '{0}',
    err_gist_loading_fail_detail:           'Could not load a valid Javascript from gist url: {0}',
    err_gist_loading_fail_url:              'Could not find gist id -- Make sure correct URL is specified. {0}',

    /*
        Gist List
    */

    lst_repotype_pub:                       'Public',
    lst_repotype_pri:                       'Secret',

}