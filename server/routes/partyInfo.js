'use strict';
const express = require('express');
const router = express.Router();
const PartyController = require('../controllers').Party;
const QueueController = require('../controllers').Queues;

router.route('/:queueid/:partyid')
  .get(PartyController.getPartyInfoCustomer);

router.route('/getPartyInfoCustomerOnMount/:userid')
  .get(PartyController.getPartyInfoCustomerOnMount);

router.route('/add/:queueid/:userid/:partysize/:firstname/:phonenumber')
  .put(PartyController.enqueue, PartyController.getPartyInfoCustomer);

router.route('/rm/:queueid/:partyid')
  .delete(PartyController.dequeue, QueueController.getPartyInfoOfQueue);

module.exports = router;
