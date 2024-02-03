window.getData = function() {
  return {
    // DATA
    tabs: [{
        tabId: '1',
        tabTitle: 'tab title 1',
        tabContent: 'tab content 1',
      },
      {
        tabId: '2',
        tabTitle: 'tab title 2',
        tabContent: 'tab content 2',
      },
      {
        tabId: '3',
        tabTitle: 'tab title 3',
        tabContent: 'tab content 3',
      },
      {
        tabId: '4',
        tabTitle: 'tab title 4',
        tabContent: 'tab content 4',
      },
    ],
    // INITIAL STATE
    state: {
      activeTabId: '1',
      disabledTabIds: ['4'],
    },
    // CLASSES
    getTabClasses(tabId) {
      return {
        'mr-1': true, // common classes
        '-mb-px': this.isTabActive(tabId) // classes if active
      };
    },
    getLinkClasses(tabId) {
      return {
        // common classes
        'bg-white inline-block py-2 px-4 font-semibold': true,
        // classes if active
        'border-l border-t border-r rounded-t text-blue-700': this.isTabActive(tabId),
        // classes if disabled
        'text-gray-400': this.isTabDisabled(tabId),
        // classes if not active and not disabled
        'text-blue-500 hover:text-blue-800': !this.isTabActive(tabId) && !this.isTabDisabled(tabId),
      };
    },
    // TAB STATE CHECK/CHANGE
    isTabActive(tabId) {
      return this.state.activeTabId === tabId;
    },
    isTabDisabled(tabId) {
      return this.state.disabledTabIds.includes(tabId);
    },
    setTabActive(tabId) { // if not disabled
      return !this.state.disabledTabIds.includes(tabId) ? this.state.activeTabId = tabId : '';
    },
  };
}