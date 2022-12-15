<template>
  <div class="wallet-login-page d-flex flex-column">
    <div class="d-flex align-center">
      <div class="d-flex flex-column">
        <div class="text-h4 font-weight-medium">Billing</div>
      </div>
      <v-spacer></v-spacer>
    </div>

    <v-card elevation="10" class="d-flex pa-6 flex-column mt-6">
      <div class="text-h5 font-weight-bold text-black">Payment method</div>

      <v-row class="mt-4">
        <v-col cols="6">
          <v-card variant="outlined" color="grey-lighten-2">
            <v-expansion-panels v-model="pm" variant="accordion">
              <v-expansion-panel value="card" elevation="0">
                <v-expansion-panel-title
                  expand-icon="solid-interface-caret-down"
                  collapse-icon="solid-interface-caret-up"
                >
                  <div class="d-flex align-center">
                    <span class="text-body-1">Credit/Debit</span>

                    <div class="d-flex ml-4">
                      <svg
                        width="34"
                        height="24"
                        viewBox="0 0 34 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="33"
                          height="23"
                          rx="3.5"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.751 15.8583H8.69129L7.14674 9.79247C7.07343 9.51344 6.91776 9.26676 6.68879 9.1505C6.11737 8.85833 5.4877 8.6258 4.80078 8.50853V8.27499H8.11886C8.57681 8.27499 8.92026 8.6258 8.97751 9.03323L9.77891 13.4087L11.8376 8.27499H13.8401L10.751 15.8583ZM14.985 15.8583H13.0398L14.6415 8.27499H16.5868L14.985 15.8583ZM19.1035 10.3758C19.1607 9.96738 19.5042 9.73384 19.9049 9.73384C20.5346 9.6752 21.2205 9.79248 21.7929 10.0836L22.1364 8.45091C21.5639 8.21737 20.9343 8.1001 20.3628 8.1001C18.4748 8.1001 17.101 9.1505 17.101 10.6083C17.101 11.7174 18.0741 12.2997 18.761 12.6505C19.5042 13.0003 19.7904 13.2338 19.7332 13.5836C19.7332 14.1083 19.1607 14.3419 18.5893 14.3419C17.9024 14.3419 17.2155 14.167 16.5868 13.8748L16.2433 15.5086C16.9303 15.7997 17.6734 15.917 18.3603 15.917C20.4773 15.9746 21.7929 14.9252 21.7929 13.3501C21.7929 11.3666 19.1035 11.2503 19.1035 10.3758ZM28.6008 15.8583L27.0562 8.27499H25.3972C25.0537 8.27499 24.7103 8.50853 24.5958 8.85833L21.7356 15.8583H23.7381L24.1378 14.7503H26.5983L26.8273 15.8583H28.6008ZM25.6834 10.3172L26.2548 13.1752H24.653L25.6834 10.3172Z"
                          fill="#172B85"
                        />
                        <rect
                          x="0.5"
                          y="0.5"
                          width="33"
                          height="23"
                          rx="3.5"
                          stroke="#F9F7F6"
                        />
                      </svg>
                      <svg
                        class="ml-2"
                        width="34"
                        height="24"
                        viewBox="0 0 34 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="33"
                          height="23"
                          rx="3.5"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.179 16.8292C15.9949 17.8273 14.459 18.4298 12.7807 18.4298C9.03582 18.4298 6 15.4301 6 11.7298C6 8.02948 9.03582 5.02979 12.7807 5.02979C14.459 5.02979 15.9949 5.63228 17.179 6.63033C18.363 5.63228 19.8989 5.02979 21.5773 5.02979C25.3221 5.02979 28.358 8.02948 28.358 11.7298C28.358 15.4301 25.3221 18.4298 21.5773 18.4298C19.8989 18.4298 18.363 17.8273 17.179 16.8292Z"
                          fill="#ED0006"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.1797 16.8292C18.6376 15.6003 19.5621 13.7717 19.5621 11.7298C19.5621 9.68783 18.6376 7.85923 17.1797 6.63032C18.3637 5.63228 19.8996 5.02979 21.578 5.02979C25.3228 5.02979 28.3587 8.02948 28.3587 11.7298C28.3587 15.4301 25.3228 18.4298 21.578 18.4298C19.8996 18.4298 18.3637 17.8273 17.1797 16.8292Z"
                          fill="#F9A000"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.1793 16.8292C18.6372 15.6003 19.5616 13.7717 19.5616 11.7298C19.5616 9.68787 18.6372 7.85927 17.1793 6.63037C15.7213 7.85927 14.7969 9.68787 14.7969 11.7298C14.7969 13.7717 15.7213 15.6003 17.1793 16.8292Z"
                          fill="#FF5E00"
                        />
                        <rect
                          x="0.5"
                          y="0.5"
                          width="33"
                          height="23"
                          rx="3.5"
                          stroke="#F9F7F6"
                        />
                      </svg>
                    </div>
                  </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <div class="d-flex flex-column">
                    <ui-titled-input title="Card holder">
                      <v-text-field
                        density="comfortable"
                        placeholder="John Brown"
                      ></v-text-field>
                    </ui-titled-input>
                  </div>
                </v-expansion-panel-text>
              </v-expansion-panel>

              <v-expansion-panel value="bank" elevation="0">
                <v-expansion-panel-title
                  expand-icon="solid-interface-caret-down"
                  collapse-icon="solid-interface-caret-up"
                >
                  <div class="d-flex align-center">
                    <span class="text-body-1">Bank Transfer</span>

                    <div class="d-flex ml-4">
                      <svg
                        width="34"
                        height="24"
                        viewBox="0 0 34 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="33"
                          height="23"
                          rx="3.5"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16.6597 6.39695C16.8821 6.32862 17.1198 6.32862 17.3421 6.39695L19.0838 6.93226C19.9924 7.21152 20.8553 7.62211 21.6452 8.15099C22.2595 8.56235 21.9683 9.52062 21.229 9.52062H12.7729C12.0335 9.52062 11.7423 8.56235 12.3567 8.15099C13.1465 7.62211 14.0094 7.21152 14.9181 6.93226L16.6597 6.39695ZM17.085 7.23334C17.0302 7.21649 16.9716 7.21649 16.9168 7.23334L15.1751 7.76865C14.4863 7.98035 13.8264 8.27496 13.2097 8.64562H20.7922C20.1755 8.27496 19.5155 7.98035 18.8267 7.76865L17.085 7.23334Z"
                          fill="#2BABCC"
                        />
                        <path
                          d="M12.4801 17.2498C12.4801 17.0082 12.676 16.8123 12.9176 16.8123H21.0843C21.3259 16.8123 21.5218 17.0082 21.5218 17.2498C21.5218 17.4914 21.3259 17.6873 21.0843 17.6873H12.9176C12.676 17.6873 12.4801 17.4914 12.4801 17.2498Z"
                          fill="#2BABCC"
                        />
                        <path
                          d="M13.6468 14.9165C13.6468 15.1581 13.8426 15.354 14.0843 15.354C14.3259 15.354 14.5218 15.1581 14.5218 14.9165L14.5218 11.4165C14.5218 11.1748 14.3259 10.979 14.0843 10.979C13.8426 10.979 13.6468 11.1748 13.6468 11.4165L13.6468 14.9165Z"
                          fill="#2BABCC"
                        />
                        <path
                          d="M17.0009 15.354C16.7593 15.354 16.5634 15.1581 16.5634 14.9165L16.5634 11.4165C16.5634 11.1748 16.7593 10.979 17.0009 10.979C17.2426 10.979 17.4384 11.1748 17.4384 11.4165V14.9165C17.4384 15.1581 17.2426 15.354 17.0009 15.354Z"
                          fill="#2BABCC"
                        />
                        <path
                          d="M19.4801 14.9165C19.4801 15.1581 19.676 15.354 19.9176 15.354C20.1592 15.354 20.3551 15.1581 20.3551 14.9165V11.4165C20.3551 11.1748 20.1592 10.979 19.9176 10.979C19.676 10.979 19.4801 11.1748 19.4801 11.4165V14.9165Z"
                          fill="#2BABCC"
                        />
                        <rect
                          x="0.5"
                          y="0.5"
                          width="33"
                          height="23"
                          rx="3.5"
                          stroke="#F9F7F6"
                        />
                      </svg>
                    </div>
                  </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <span class="text-disabled">Coming soon ...</span>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card
            variant="outlined"
            color="grey-lighten-2"
            class="py-4 px-6 d-flex flex-column"
          >
            <div class="text-body-1 d-flex align-center text-black">
              Crypto

              <div class="d-flex ml-4">
                <svg
                  width="34"
                  height="24"
                  viewBox="0 0 34 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="33"
                    height="23"
                    rx="3.5"
                    fill="white"
                  />
                  <ellipse
                    cx="16.935"
                    cy="11.935"
                    rx="7.935"
                    ry="7.93499"
                    fill="#6481E7"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.4688 12.2576L17.0281 14.3617V6.35156L13.4688 12.2576Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.0273 6.35156V14.3617L20.5867 12.2576L17.0273 6.35156Z"
                    fill="#C1CCF5"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.0283 10.6401L13.4688 12.2578L17.0281 14.362L20.5877 12.258L17.0283 10.6401Z"
                    fill="#8299EC"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.0283 10.6401L13.4688 12.2578L17.0281 14.362L17.0283 10.6401Z"
                    fill="#C1CCF5"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.4688 12.9331L17.0281 17.9491V15.0361L13.4688 12.9331Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.0273 15.0361V17.9493L20.589 12.9331L17.0273 15.0361Z"
                    fill="#C1CCF5"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="33"
                    height="23"
                    rx="3.5"
                    stroke="#F9F7F6"
                  />
                </svg>

                <svg
                  class="ml-2"
                  width="34"
                  height="24"
                  viewBox="0 0 34 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="33"
                    height="23"
                    rx="3.5"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.87 11.935C24.87 16.3174 21.3174 19.87 16.935 19.87C12.5526 19.87 9 16.3174 9 11.935C9 7.55262 12.5526 4 16.935 4C21.3174 4 24.87 7.55262 24.87 11.935ZM18.8414 8.98687C19.9451 9.36591 20.7526 9.93347 20.5942 10.9897C20.4791 11.7632 20.0488 12.1373 19.4769 12.2682C20.2614 12.6751 20.5288 13.4471 20.2804 14.3807C19.8087 15.7242 18.6874 15.8373 17.1961 15.5565L16.834 17.0008L15.9599 16.7835L16.317 15.3586C16.0904 15.3025 15.8587 15.2425 15.6202 15.1785L15.2615 16.6103L14.3884 16.393L14.75 14.9458L12.9892 14.5033L13.4235 13.5061C13.4235 13.5061 14.0681 13.6762 14.0591 13.6638C14.3067 13.7248 14.4167 13.5641 14.4601 13.4574L15.4413 9.53757C15.4523 9.35251 15.388 9.11933 15.0339 9.03102C15.0473 9.0216 14.3988 8.87375 14.3988 8.87375L14.6314 7.94352L16.3947 8.37862L16.7533 6.9478L17.627 7.1651L17.2758 8.56764C17.5109 8.62073 17.747 8.67481 17.9767 8.73186L18.3253 7.33825L19.1995 7.55555L18.8414 8.98687ZM16.7497 11.3737C17.3452 11.5315 18.6409 11.8751 18.8668 10.9743C19.0972 10.0528 17.8383 9.77447 17.2219 9.63819C17.1521 9.62275 17.0905 9.60913 17.0402 9.59661L16.6049 11.336C16.6464 11.3463 16.6951 11.3592 16.7497 11.3736L16.7497 11.3737ZM16.075 14.1742C16.7882 14.362 18.3481 14.7729 18.5963 13.7804C18.8503 12.7656 17.338 12.4276 16.6 12.2626L16.6 12.2626C16.5175 12.2442 16.4448 12.228 16.3852 12.2131L15.9051 14.1302C15.9538 14.1422 16.0109 14.1573 16.0748 14.1741L16.075 14.1742Z"
                    fill="#F7931A"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="33"
                    height="23"
                    rx="3.5"
                    stroke="#F9F7F6"
                  />
                </svg>

                <svg
                  class="ml-2"
                  width="34"
                  height="24"
                  viewBox="0 0 34 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="33"
                    height="23"
                    rx="3.5"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25 12C25 16.4183 21.4183 20 17 20C12.5817 20 9 16.4183 9 12C9 7.58172 12.5817 4 17 4C21.4183 4 25 7.58172 25 12ZM14.8284 12.594L15.9562 8.3638H18.4004L17.5543 11.6541L18.6825 11.1841L18.4004 12.2179L17.2722 12.594L16.7083 14.6622H20.7507L20.3746 16.166H13.888L14.5462 13.6279L13.6063 14.0039L13.888 12.9701L14.8284 12.594Z"
                    fill="#A5A8A9"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="33"
                    height="23"
                    rx="3.5"
                    stroke="#F9F7F6"
                  />
                </svg>
              </div>
            </div>

            <ui-titled-input class="mt-6" title="Choose currency">
              <div class="d-flex">
                <svg
                  width="34"
                  height="24"
                  viewBox="0 0 34 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="33"
                    height="23"
                    rx="3.5"
                    fill="white"
                  />
                  <ellipse
                    cx="16.935"
                    cy="11.935"
                    rx="7.935"
                    ry="7.93499"
                    fill="#6481E7"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.4688 12.2576L17.0281 14.3617V6.35156L13.4688 12.2576Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.0273 6.35156V14.3617L20.5867 12.2576L17.0273 6.35156Z"
                    fill="#C1CCF5"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.0283 10.6401L13.4688 12.2578L17.0281 14.362L20.5877 12.258L17.0283 10.6401Z"
                    fill="#8299EC"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.0283 10.6401L13.4688 12.2578L17.0281 14.362L17.0283 10.6401Z"
                    fill="#C1CCF5"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.4688 12.9331L17.0281 17.9491V15.0361L13.4688 12.9331Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.0273 15.0361V17.9493L20.589 12.9331L17.0273 15.0361Z"
                    fill="#C1CCF5"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="33"
                    height="23"
                    rx="3.5"
                    stroke="#F9F7F6"
                  />
                </svg>

                <svg
                  class="ml-2"
                  width="34"
                  height="24"
                  viewBox="0 0 34 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="33"
                    height="23"
                    rx="3.5"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.87 11.935C24.87 16.3174 21.3174 19.87 16.935 19.87C12.5526 19.87 9 16.3174 9 11.935C9 7.55262 12.5526 4 16.935 4C21.3174 4 24.87 7.55262 24.87 11.935ZM18.8414 8.98687C19.9451 9.36591 20.7526 9.93347 20.5942 10.9897C20.4791 11.7632 20.0488 12.1373 19.4769 12.2682C20.2614 12.6751 20.5288 13.4471 20.2804 14.3807C19.8087 15.7242 18.6874 15.8373 17.1961 15.5565L16.834 17.0008L15.9599 16.7835L16.317 15.3586C16.0904 15.3025 15.8587 15.2425 15.6202 15.1785L15.2615 16.6103L14.3884 16.393L14.75 14.9458L12.9892 14.5033L13.4235 13.5061C13.4235 13.5061 14.0681 13.6762 14.0591 13.6638C14.3067 13.7248 14.4167 13.5641 14.4601 13.4574L15.4413 9.53757C15.4523 9.35251 15.388 9.11933 15.0339 9.03102C15.0473 9.0216 14.3988 8.87375 14.3988 8.87375L14.6314 7.94352L16.3947 8.37862L16.7533 6.9478L17.627 7.1651L17.2758 8.56764C17.5109 8.62073 17.747 8.67481 17.9767 8.73186L18.3253 7.33825L19.1995 7.55555L18.8414 8.98687ZM16.7497 11.3737C17.3452 11.5315 18.6409 11.8751 18.8668 10.9743C19.0972 10.0528 17.8383 9.77447 17.2219 9.63819C17.1521 9.62275 17.0905 9.60913 17.0402 9.59661L16.6049 11.336C16.6464 11.3463 16.6951 11.3592 16.7497 11.3736L16.7497 11.3737ZM16.075 14.1742C16.7882 14.362 18.3481 14.7729 18.5963 13.7804C18.8503 12.7656 17.338 12.4276 16.6 12.2626L16.6 12.2626C16.5175 12.2442 16.4448 12.228 16.3852 12.2131L15.9051 14.1302C15.9538 14.1422 16.0109 14.1573 16.0748 14.1741L16.075 14.1742Z"
                    fill="#F7931A"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="33"
                    height="23"
                    rx="3.5"
                    stroke="#F9F7F6"
                  />
                </svg>

                <svg
                  class="ml-2"
                  width="34"
                  height="24"
                  viewBox="0 0 34 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="33"
                    height="23"
                    rx="3.5"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25 12C25 16.4183 21.4183 20 17 20C12.5817 20 9 16.4183 9 12C9 7.58172 12.5817 4 17 4C21.4183 4 25 7.58172 25 12ZM14.8284 12.594L15.9562 8.3638H18.4004L17.5543 11.6541L18.6825 11.1841L18.4004 12.2179L17.2722 12.594L16.7083 14.6622H20.7507L20.3746 16.166H13.888L14.5462 13.6279L13.6063 14.0039L13.888 12.9701L14.8284 12.594Z"
                    fill="#A5A8A9"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="33"
                    height="23"
                    rx="3.5"
                    stroke="#F9F7F6"
                  />
                </svg>
              </div>
            </ui-titled-input>

            <ui-titled-input class="mt-6" title="Enter wallet address">
              <v-text-field
                density="comfortable"
                placeholder="0x00 ... 0000"
              ></v-text-field>
            </ui-titled-input>
          </v-card>
        </v-col>
      </v-row>
    </v-card>

    <v-card elevation="10" class="d-flex flex-column mt-6">
      <div class="d-flex pa-6 pb-0">
        <div class="text-h5 font-weight-bold text-black">Invoices</div>
      </div>
      <ui-table class="rounded-0 mt-4">
        <template #head>
          <tr>
            <th>ID</th>
            <th>URL</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </template>
        <template #body>
          <tr>
            <td>1</td>
            <td>https://google.com</td>
            <td>100$</td>
            <td>2022-01-01</td>
          </tr>
          <tr>
            <td>2</td>
            <td>https://google.com</td>
            <td>100$</td>
            <td>2022-01-01</td>
          </tr>
          <tr>
            <td>3</td>
            <td>https://google.com</td>
            <td>100$</td>
            <td>2022-01-01</td>
          </tr>
        </template>
      </ui-table>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import TutorialCard from "@/components/home-page/TutorialCard.vue";
import { ref } from "vue-demi";

const pm = ref<string>("card");
</script>

<style lang="scss" scoped>
.team-page {
  .arrow {
    position: absolute;
    right: 0;
    top: 0;
    transform: rotate(-45deg);
  }
}
</style>
