<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\ProjectImagesTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\ProjectImagesTable Test Case
 */
class ProjectImagesTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\ProjectImagesTable
     */
    public $ProjectImages;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.project_images'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('ProjectImages') ? [] : ['className' => 'App\Model\Table\ProjectImagesTable'];
        $this->ProjectImages = TableRegistry::get('ProjectImages', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->ProjectImages);

        parent::tearDown();
    }

    /**
     * Test initialize method
     *
     * @return void
     */
    public function testInitialize()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test validationDefault method
     *
     * @return void
     */
    public function testValidationDefault()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
